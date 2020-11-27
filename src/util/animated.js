export default {
    install(Vue) {
        let mobile = document.documentElement.clientWidth;
            Vue.directive('animated', {
                bind(el) {
                    if (mobile >= 767) el.style.opacity = 0;
                },
                inserted(el, binding) {
                    const scroll = () => {
                        let par = el.offsetParent
                        let t = el.offsetTop
                        while (par && par.tagName !== 'BODY') {
                            t += par.clientTop
                            t += par.offsetTop
                            par = par.offsetParent
                        }
                        let windowHeight = document.documentElement.clientHeight;
                        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                        if (t <= scrollTop + windowHeight && el.clientHeight + t >= scrollTop) {
                            if (el.className.indexOf(binding.value.className) === -1) {
                                el.className += ('' + binding.value.className);
                            }
                            el.style.opacity = 1;
                        } else {
                            el.className = el.className.replace(binding.value.className, '')
                        }
                    };
                    if (mobile >= 767) {
                        scroll();
                        window.addEventListener('scroll', scroll, true);
                    }
                },
                unbind(el) {
                    if (mobile >= 767) window.removeEventListener('scroll', scroll, true);
                }
            });
        
    }
}