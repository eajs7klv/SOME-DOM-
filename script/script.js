const body = document.body
const header = document.createElement('header')
// const burger_menu = document.createElement('.div')
// const toggle = document.createElement('#input')
const logo_block = document.createElement('div')
logo_block.className = 'logo_block'
const img = document.createElement('img')
img.src = './img/logo.png'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'


const nav = document.createElement('nav')
nav.className = 'navbar'
const ull = document.createElement('ul')
ull.className = 'ull'
const menuItem = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']
menuItem.forEach((el) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.className = 'menu_item'
    a.textContent = el
    li.append(a)
    ull.append(li)
})


const main = document.createElement('main')


const section1 = document.createElement('div') 
section1.className = 'section1' 
for (let i = 0; i < 3; i++) { 
    const card = document.createElement('div') 
    card.className = 'card' 
    const img = document.createElement('img') 
    img.src = "./img/foto.png" 
    const p = document.createElement('p') 
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?' 
    section1.append(card) 
    card.append(img, p) 
}

const h2 = document.createElement('h2')
h2.textContent='О приложении'

const container_rod = document.createElement('div')
container_rod.className= 'container_rod'
const imgRod = document.createElement('img')
imgRod.src = './img/fott.png'
const container_doch = document.createElement('div')
container_doch.className = 'container_doch'
const imgDoch = document.createElement('img')
imgDoch.src = './img/play-button.png'


const question_block = document.createElement('section')
question_block.className = 'question_block'
const block_imgs = document.createElement('div')
block_imgs.className = 'block_imgs'
for(let i=0;i<5;i++){

    
    const img = document.createElement('img')
    img.className='block_img'
    img.src='./img/question.png'

    block_imgs.append(img)
}

const section = document.createElement('section')
const container_info =document.createElement('div')
container_info.className='container_info'
const h2Container = document.createElement('h2')
h2Container.textContent ='О проекте'
const pContainer = document.createElement('p')
pContainer.textContent=`Курс для начинающих предпринимателей, направленный на качественный
результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в
своем деле помогают участникам на всех этапах развития их бизнеса: от
разработки идеи до ее реализации.`



const down_p =document.createElement('section')
down_p.className ='down_p'
const container_download = document.createElement('div') 
container_download.className = 'container_download'
const h2Down = document.createElement('h2')
h2Down.textContent='Скачать'
const down = document.createElement('div')
down.className='down'
const down2 = document.createElement('div')
down2.className = 'down2'
const imgDown2 = document.createElement('img')
imgDown2.src='./img/android.png'
const down1 = document.createElement('div')
down1.className = 'down1'
const imgDown1 = document.createElement('img')
imgDown1.src='./img/icon.png'
const pDown= document.createElement('p')
pDown.textContent=` Курс для начинающих предпринимателей, направленный на качественный
результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в
своем деле помогают участникам на всех этапах развития их бизнеса: от
разработки идеи до ее реализации.`




const footer = document.createElement('footer')
const h6  = document.createElement('h6')
h6.textContent='SOME'
const footerDiv = document.createElement('div')
footerDiv.className='footer'
const imgVK=document.createElement('img')
imgVK.src='./img/vk.png'
const imgInsta=document.createElement('img')
imgInsta.src='./img/instagram (1).png'
const imgFace=document.createElement('img')
imgFace.src='./img/facebook.png'


const contact =document.createElement('div')
contact.className = 'contact'
const one_size =document.createElement('div')
one_size.className = 'one_size'
const h2Contact = document.createElement('h2')
h2Contact.textContent ='Контакты'
const pContact = document.createElement('p')
pContact.textContent = `Tel.: +996 (312) 915000 + Еxt.
Fax: +996 (312) 915 028`

const one_size1 =document.createElement('div')
one_size1.className = 'one_size'
const h2Adress = document.createElement('h2')
h2Adress.textContent='Адреса'
const pAdress = document.createElement('p')
pAdress.textContent=`American University of Central Asia
7/6 Aaly Tokombaev Street
Bishkek, Kyrgyz Republic 720060`

const one_size2 =document.createElement('div')
one_size2.className = 'one_size'
const h2Help = document.createElement('h2')
h2Help.textContent ='Помощь'
const pHelp = document.createElement('p')
pHelp.textContent = `Помощь
 Помощь
 Помощь`





body.append(header, main,footer)
footer.append(h6,footerDiv,contact)
contact.append(one_size,one_size1,one_size2)
one_size1.append(h2Adress,pAdress)
one_size2.append(h2Help,pHelp)
one_size.append(h2Contact,pContact)
footerDiv.append(imgVK,imgInsta,imgFace)
header.append(logo_block, nav)
logo_block.append(img, h1)
nav.append(ull)
main.append(section1,h2,container_rod,question_block,section,down_p)
down_p.append(container_download,pDown)
container_download.append(h2Down,down)
down.append(imgDown2,imgDown1)
section.append(container_info)
container_info.append(h2Container,pContainer)
question_block.append(block_imgs)
container_rod.append(imgRod,container_doch)
container_doch.append(imgDoch)