export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] h2');
  const tabContent = document.querySelectorAll('[data-tab="content"]');
  
  function activeTab (index) { // esse index é só o nome do parametro, mas poderia ser item, event e por ai vai
    tabContent.forEach ((p) =>{
      p.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    //  console.log(direcao); mostra se onde está clicando é show right, show down ou show up
    tabContent[index].classList.add('ativo', direcao);
    //  console.log(tabContent[index]); seleciona o p que eu cliquei
  }

  if (tabMenu.length && tabContent.length){
  
  
  tabMenu.forEach ((itemMenu, index)=> {
    itemMenu.addEventListener('click', ()=> {
      activeTab(index);
      console.log(activeTab(index));
    });
  });
  tabContent[0].classList.add ('ativo');
  }
}
  