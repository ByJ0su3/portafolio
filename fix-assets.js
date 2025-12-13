import fs from 'fs'
import path from 'path'

// Función para renombrar archivos
function renameFiles() {
  const assetsDir = path.join(process.cwd(), 'dist', 'assets')
  
  if (!fs.existsSync(assetsDir)) {
    console.log('❌ No existe la carpeta assets')
    return
  }

  const files = fs.readdirSync(assetsDir)
  
  files.forEach(file => {
    // Renombrar index-XXXXX.css a index.css
    if (file.startsWith('index-') && file.endsWith('.css')) {
      const newName = 'index.css'
      fs.renameSync(
        path.join(assetsDir, file),
        path.join(assetsDir, newName)
      )
      console.log(`✅ Renombrado: ${file} -> ${newName}`)
    }
    
    // Renombrar index-XXXXX.js a index.js
    if (file.startsWith('index-') && file.endsWith('.js')) {
      const newName = 'index.js'
      fs.renameSync(
        path.join(assetsDir, file),
        path.join(assetsDir, newName)
      )
      console.log(`✅ Renombrado: ${file} -> ${newName}`)
    }
    
    // Renombrar favicon-XXXXX.ico a favicon.ico
    if (file.startsWith('favicon-') && file.endsWith('.ico')) {
      const newName = 'favicon.ico'
      fs.renameSync(
        path.join(assetsDir, file),
        path.join(assetsDir, newName)
      )
      console.log(`✅ Renombrado: ${file} -> ${newName}`)
    }
  })

  // Actualizar index.html
  const indexPath = path.join(process.cwd(), 'dist', 'index.html')
  let html = fs.readFileSync(indexPath, 'utf8')
  
  // Reemplazar nombres con hash por nombres simples
  html = html.replace(/index-[a-zA-Z0-9]+\.css/g, 'index.css')
  html = html.replace(/index-[a-zA-Z0-9]+\.js/g, 'index.js')
  html = html.replace(/favicon-[a-zA-Z0-9]+\.ico/g, 'favicon.ico')
  
  fs.writeFileSync(indexPath, html)
  console.log('✅ index.html actualizado')
}

renameFiles()