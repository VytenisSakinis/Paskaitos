const accordionElement = document.querySelectorAll('.accordion');

for(let i = 0; i < accordionElement.length; i++)
{
    accordionElement[i].addEventListener('click', function(){
        this.classList.toggle('active')

        const desc = this.nextElementSibling
        if(desc.style.maxHeight)
        {
            desc.style.maxHeight = null;
        }
        else
        {
            desc.style.maxHeight = desc.scrollHeight + "px";
        }
    })
}
