from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'assets/docs/CV_Ruben_Munoz_Docente.pdf'
pdfmetrics.registerFont(TTFont('DV','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DVB','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFontFamily('DV',normal='DV',bold='DVB',italic='DV',boldItalic='DVB')
INK='#202a32'; RED='#b52b35'; MUTED='#59636a'
styles={
 'body':ParagraphStyle('body',fontName='DV',fontSize=9.5,leading=14,textColor=colors.HexColor(INK),spaceAfter=8),
 'section':ParagraphStyle('section',fontName='DVB',fontSize=9.4,leading=13,textColor=colors.HexColor(RED),spaceBefore=12,spaceAfter=9),
 'small':ParagraphStyle('small',fontName='DV',fontSize=8.5,leading=12.5,textColor=colors.HexColor(MUTED),spaceAfter=8),
 'item':ParagraphStyle('item',fontName='DV',fontSize=9.2,leading=13.7,textColor=colors.HexColor(INK),spaceAfter=11),
}
def P(s,style='body'):return Paragraph(s,styles[style])
def header(c,page):
 c.setFillColor(colors.HexColor(RED)); c.roundRect(42,752,47,47,8,fill=1,stroke=0)
 c.setFillColor(colors.white);c.setFont('DVB',17);c.drawCentredString(65.5,768,'RM')
 c.setFillColor(colors.HexColor(INK));c.setFont('DVB',21);c.drawString(102,781,'Rubén Muñoz Valadés')
 c.setFillColor(colors.HexColor(RED));c.setFont('DVB',9);c.drawString(102,763,'DOCENTE FPE · OFIMÁTICA · IA EDUCATIVA')
 c.setFillColor(colors.HexColor(MUTED));c.setFont('DV',8.7)
 c.drawString(42,730,'Mairena del Aljarafe (Sevilla)  ·  rumuva1492@gmail.com')
 email_x=42+pdfmetrics.stringWidth('Mairena del Aljarafe (Sevilla)  ·  ','DV',8.7)
 c.linkURL('mailto:rumuva1492@gmail.com',(email_x,727,email_x+pdfmetrics.stringWidth('rumuva1492@gmail.com','DV',8.7),738),relative=0)
 c.setFont('DV',8.2);c.drawString(42,714,'Portfolio: rumuva.github.io/ruben-munoz-docente/')
 c.linkURL('https://rumuva.github.io/ruben-munoz-docente/',(81,711,345,722),relative=0)
 c.setStrokeColor(colors.HexColor(RED));c.setLineWidth(1.2);c.line(42,701,553,701)
 c.setStrokeColor(colors.HexColor('#dedfd9'));c.setLineWidth(.6);c.line(42,44,553,44)
 c.setFillColor(colors.HexColor(MUTED));c.setFont('DV',7)
 c.drawString(42,30,'RUBÉN MUÑOZ DOCENTE · CV profesional · Actualizado: 22/10/2026')
 c.drawRightString(553,30,f'{page} / 2')

page1=[
 P('PERFIL PROFESIONAL','section'),
 P('Docente acreditado en Formación Profesional para el Empleo (SSCE0110), con experiencia en ofimática y formación de personas adultas y desempleadas. Diseño guías, ejercicios y recursos digitales con un enfoque práctico y progresivo. Mi trayectoria en comercio, administración y atención al cliente conecta el aprendizaje con situaciones reales de trabajo.'),
 P('EXPERIENCIA DOCENTE Y PROFESIONAL','section'),
 P('<b>Dabo Consulting | Docente de Ofimática Básica | 2025</b><br/>Impartición de cursos de 40 horas para personas desempleadas, incluidas personas jóvenes. Word, Excel, PowerPoint y Access. Elaboración de materiales, prácticas guiadas y seguimiento del aprendizaje.','item'),
 P('<b>Ayuntamiento de Mairena del Aljarafe / IMDC | PEF de Docencia</b><br/><font color="#59636a">2024-2025 · Práctica docente tutorizada en 2025</font><br/>Participación en cinco acciones formativas de 50 horas (250 horas): IA, Excel, ofimática, Java/XML/Ajax y gestión financiera. Preparación de actividades, impartición supervisada y evaluación.','item'),
 P('<b>Distrimedios, S. L. | Formador de usuarios y administrativo | 2009-2014</b><br/>Formación a clientes en software de ventas y TPV. Gestión documental, atención al usuario y apoyo en el uso de herramientas informáticas.','item'),
 P('<b>Quindesur, S. L. | Comercial con funciones de jefe de equipo | 2014-2017</b><br/>Coordinación comercial, negociación, relación con clientes y seguimiento de objetivos.','item'),
 P('QUÉ PUEDO APORTAR AL EQUIPO FORMATIVO','section'),
 P('<b>Docencia práctica:</b> explicaciones paso a paso, ejercicios vinculados al empleo y adaptación al nivel inicial del alumnado.<br/><b>Diseño instruccional:</b> objetivos, secuencias de aprendizaje, guías didácticas y evaluación por evidencias.<br/><b>Recursos digitales:</b> materiales de ofimática, actividades con IA generativa y contenidos con eXeLearning y HTML.'),
 P('COMPETENCIAS Y DISPONIBILIDAD','section'),
 P('Word · Excel · PowerPoint · Access · Google Drive · IA generativa · eXeLearning · Elaboración de manuales y actividades.<br/>Docencia presencial y online · Sevilla y Aljarafe · Permiso B · Contratación laboral por cuenta ajena.'),
 P('<b>Formación académica:</b> Bachillerato.','small'),
]
page2=[
 P('CERTIFICADO PROFESIONAL Y COMPETENCIAS ACREDITADAS','section'),
 P('<b>SSCE0110 · Habilitación para la docencia en grados A, B y C</b><br/>Certificado de profesionalidad · 380 h · 2025.<br/>Denominación anterior: Docencia de la Formación Profesional para el Empleo.','item'),
 P('<b>COM314_3 · Gestión comercial de ventas</b><br/>Cinco unidades de competencia acreditadas por PEAC, familia Comercio y Marketing · 2026: UC0239_2, UC0503_3, UC1000_3, UC1001_3 y UC9998_2.<br/><font color="#59636a">Título completo COMT0411 solicitado; expedición pendiente de confirmación.</font>','item'),
 P('<b>ADG307_2 · Competencias administrativas acreditadas por PEAC</b><br/>UC0973_1: introducción de datos y textos. UC0976_2: operaciones administrativas comerciales · 2026.','item'),
 P('FORMACIÓN SELECCIONADA PARA EL PERFIL DOCENTE','section'),
 P('<b>Diseño instruccional de experiencias innovadoras · SSCE18CCC</b><br/>210 h · 2025.','item'),
 P('<b>IA: del conocimiento básico a la creación de soluciones</b><br/>120 h · Cámara de Comercio de Sevilla · 2026.','item'),
 P('<b>Competencias digitales para formadores con programación</b><br/>150 h · 2025.','item'),
 P('<b>Generación de contenidos digitales</b><br/>150 h · FUNDAE · 2025.','item'),
 P('<b>Experto e-learning</b><br/>70 h · Sinergia Soluziona · 2025.','item'),
 P('<b>Ofimática en la nube: Google Drive · ADGG055PO</b><br/>100 h · 2023.','item'),
 P('<b>Creación de contenidos digitales · SSCE026PO</b><br/>90 h · 2024.','item'),
 P('FORMACIÓN COMPLEMENTARIA APLICABLE AL AULA','section'),
 P('<b>Técnicas de reclutamiento y selección de personal · ADGD260PO</b><br/>60 h · Diseño de Recursos Educativos, S. L. · 2026.<br/><b>Habilidades sociales, comunicación y oratoria</b> · 50 h · Ayto. de Mairena · 2025.<br/><b>Negociación comercial, ventas y gestión comercial</b> · 50 h · Ayto. de Mairena · 2025.','item'),
 P('Selección orientada a docencia FPE, ofimática, IA aplicada y creación de materiales. Documentación acreditativa disponible para procesos de selección.','small'),
]
OUT.parent.mkdir(parents=True,exist_ok=True)
c=canvas.Canvas(str(OUT),pagesize=(595.28,841.89))
c.setTitle('Rubén Muñoz Valadés - CV docente FPE');c.setAuthor('Rubén Muñoz Valadés')
for i,story in enumerate([page1,page2],1):
 header(c,i)
 frame=Frame(42,57,511,636,leftPadding=0,rightPadding=0,topPadding=0,bottomPadding=0)
 frame.addFromList(story,c)
 if story:raise RuntimeError(f'Contenido excede página {i}: {len(story)} bloques')
 c.showPage()
c.save()
print(OUT)
