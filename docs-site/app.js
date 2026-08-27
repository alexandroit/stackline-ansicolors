'use strict';

(() => {
  const colors = globalThis.AnsiColors.default
  const textInput = document.querySelector('#text-input')
  const preview = document.querySelector('#preview-text')
  const output = document.querySelector('#result-output')
  const palette = document.querySelector('#palette')
  const status = document.querySelector('#status-text')
  const modeButtons = [...document.querySelectorAll('[data-mode]')]
  const names = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'brightBlack', 'brightRed', 'brightGreen', 'brightYellow', 'brightBlue', 'brightMagenta', 'brightCyan', 'brightWhite']
  const cssColors = ['#111827', '#dc2626', '#16a34a', '#ca8a04', '#2563eb', '#c026d3', '#0891b2', '#e5e7eb', '#6b7280', '#f87171', '#4ade80', '#fde047', '#60a5fa', '#e879f9', '#22d3ee', '#ffffff']
  let mode = 'foreground'
  let foreground = 'green'
  let background = null

  renderPalette()
  render()

  textInput.addEventListener('input', render)
  document.querySelector('#reset-button').addEventListener('click', () => { textInput.value = 'Stackline ready'; mode = 'foreground'; foreground = 'green'; background = null; syncModes(); renderPalette(); render() })
  document.querySelector('#copy-output-button').addEventListener('click', async (event) => { await navigator.clipboard.writeText(buildAnsi()); flash(event.currentTarget) })
  document.addEventListener('click', async (event) => { const button = event.target.closest('[data-copy]'); if (!button) return; await navigator.clipboard.writeText(button.dataset.copy); flash(button) })
  for (const button of modeButtons) button.addEventListener('click', () => { mode = button.dataset.mode; syncModes(); renderPalette() })

  function renderPalette() {
    palette.replaceChildren()
    if (mode === 'background') palette.append(createSwatch(null, '#ffffff', 'No background'))
    names.forEach((name, index) => palette.append(createSwatch(name, cssColors[index], name)))
  }

  function createSwatch(name, color, label) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'color-swatch'
    button.style.setProperty('--swatch', color)
    button.title = label
    button.setAttribute('aria-label', label)
    const selected = mode === 'foreground' ? name === foreground : name === background
    button.setAttribute('aria-pressed', String(selected))
    if (name === null) button.classList.add('no-color')
    button.addEventListener('click', () => { if (mode === 'foreground') foreground = name || 'white'; else background = name; renderPalette(); render() })
    return button
  }

  function buildAnsi() {
    let value = colors[foreground](textInput.value)
    if (background) value = colors[`bg${background[0].toUpperCase()}${background.slice(1)}`](value)
    return value
  }

  function render() {
    preview.textContent = textInput.value || ' '
    preview.style.color = cssColors[names.indexOf(foreground)]
    preview.style.backgroundColor = background ? cssColors[names.indexOf(background)] : 'transparent'
    output.textContent = JSON.stringify(buildAnsi()).slice(1, -1)
    status.textContent = `${foreground} foreground, ${background || 'no'} background`
  }

  function syncModes() {
    for (const button of modeButtons) button.setAttribute('aria-pressed', String(button.dataset.mode === mode))
  }

  function flash(button) {
    const original = button.textContent
    button.textContent = 'Copied'
    setTimeout(() => { button.textContent = original }, 1200)
  }
})()
