export default {
    install(Vue) {
        Vue.directive('animated', {
            bind(el) {
                el.style.opacity = 0;
            },
            inserted(el , binding) {
                const scroll = () => {
                    let par=el.offsetParent
                    let t=el.offsetTop
                    while(par&&par.tagName!=='BODY'){
                        t+=par.clientTop
                        t+=par.offsetTop
                        par=par.offsetParent
                    }
                    let windowHeight = document.documentElement.clientHeight;
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                    if(t<=scrollTop+windowHeight && el.clientHeight+t>=scrollTop) {
                        if (el.className.indexOf(binding.value.className) === -1){
                            el.className += binding.value.className;
                        }
                        el.style.opacity = 1;
                    }else {
                        el.className=el.className.replace(binding.value.className,'')

                    }
                };
                scroll();

                window.addEventListener('scroll', scroll, true);
            },
            unbind(el) {
                window.removeEventListener('scroll', scroll, true);
            }
        });
    }
}