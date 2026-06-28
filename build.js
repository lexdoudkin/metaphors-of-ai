const fs = require('fs');
const d = JSON.parse(fs.readFileSync(__dirname + '/points.json', 'utf8'));
fs.writeFileSync(__dirname + '/points.js', 'window.MATRIX = ' + JSON.stringify(d, null, 2) + ';\n');
const cols = ['id','name','quadrant','threat','agency','x','y','nx','ny','rotation','image_file','image_final','suggested_image','description','references'];
const esc = v => { v = (v == null ? '' : String(v)); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
const rows = [cols.join(',')];
for (const p of d.points) {
  const r = { ...p, ...p.position, references: (p.references || []).join(' | '), image_final: p.image_final || '' };
  rows.push(cols.map(c => esc(r[c])).join(','));
}
fs.writeFileSync(__dirname + '/points.csv', rows.join('\n') + '\n');
console.log('wrote points.js + points.csv (' + d.points.length + ' points)');
