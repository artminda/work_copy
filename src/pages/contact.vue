<template>
    <div>
        <tp-banner :url="url" class="tp-banner-container ">
            <img src="../assets/img/freeze/text-contact-tp-banner.png" alt="">
        </tp-banner>
        <div style="width: 95px;height: 153px;position: fixed;bottom: 100px;right: 0px;border-radius: 5px;z-index: 999">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=939330888&amp;site=qq&amp;menu=yes">
                <img border="0" src="http://wpa.qq.com/pa?p=2:939330888:53" alt="点击这里给我发消息" title="点击这里给我发消息">
            </a>
        </div>
        <div class="wrapper">
            <section id="contact-us">
                <div class="container animated fadeInDown">
                    <div class="contact-item">
                        <div class="tips" v-if="isTips">
                            <span>{{msg}}</span>
                        </div>
                        <img class="hidden-xs" src="../assets/img/freeze/footer-icon-white.png">
                        <form action="" method="post">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="姓名*" v-model="form.name">
                                <label class="err" v-if="err.name">{{err.name}}</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="电话*" v-model="form.phone">
                                <label class="err">{{err.phone}}</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="邮箱*" v-model="form.email">
                                <label class="err">{{err.email}}</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="QQ" v-model="form.QQ">
                            </div>
                            <div class="form-group">
                                <textarea cols="30" rows="6" class="form-control" placeholder="输入您想咨询的内容" v-model="form.text"></textarea>
                                <label class="err">{{err.text}}</label>
                            </div>
                            <button type="button" class="btn btn-primary btn-lg" @click="btnClick">提交</button>
                        </form>
                    </div>
                </div>

            </section>

        </div>
    </div>
</template>
<script>
    import tpBanner from '../components/top-banner'
    import {contactPost} from '../api/index'
    export default {
        name:'contact',
        data(){
            return{
                url:require('../assets/img/freeze/bg-contact-banner.jpg'),
                isTips:false,
                form:{
                    name:'',
                    phone:'',
                    QQ:'',
                    email:'',
                    text:''
                },
                err:{},
                msg:'信息提交成功'
            }
        },
        methods:{
            btnClick(){
                let saveMessage={
                    'user_name': this.form.name,
                    'contact_method': this.form.phone,
                    'message_content': this.form.text,
                    'mailbox': this.form.email,
                    'user_qq':this.form.QQ,
                    'source':2
                }

                if (this.blur_name()&&this.blur_phone()&&this.blur_email()&&this.blur_text()){
                    contactPost(saveMessage).then(res=>{
                        this.isTips=true
                        this.msg='信息提交成功'
                        let clear=setTimeout(()=>{
                            this.isTips=false
                            clearTimeout(clear)
                        },2000)
                        this.form={}
                    }).catch(()=>{
                        this.isTips=true
                        this.msg='信息提交失败，请稍后再试'
                        let clear=setTimeout(()=>{
                            this.isTips=false
                            clearTimeout(clear)
                        },2000)
                    })
                }else {
                    this.blur_name();
                    this.blur_phone();
                    this.blur_email();
                    this.blur_text();
                }
            },
            showError(error,msg){
                this.$set(this.err, error, msg)
            },
            blur_name(){
                let name=/^.+$/
                if (this.form.name==''){
                    this.showError('name','姓名不能为空')
                    return false
                }else {
                    this.err.name=''
                    return true
                }
            },
            blur_phone(){
                let phone=/^1[34578]\d{9}$/
                if(this.form.phone.length==0){
                    this.showError('phone','手机号码不能为空')
                    return false
                }else if(!phone.test(this.form.phone)){
                    this.showError('phone','手机号码格式不正确')
                }else {
                    this.err.phone=''
                    return true
                }
            },
            blur_email(){
                let email=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                if(this.form.email==''){
                    this.showError('email','邮箱不能为空')
                    return false
                }else if(!email.test(this.form.email)){
                    this.showError('email','邮箱格式不正确')
                    return false
                }else {
                    this.err.email=''
                    return true
                }
            },
            blur_text(){
                let text=/^.+$/
                if(this.form.text.length==0){
                    this.showError('text','请输入您想咨询的内容')
                    return false
                }else {
                    this.err.text=''
                    return true
                }
            },
        },
        components:{
            tpBanner,
        }
    }
</script>
<style lang="scss" scoped>

    .form-group {
        margin: 0 40px;
        margin-bottom: 25px;
        position: relative;
        display: inline-block;
    }
    .form-control {
        box-shadow: none;
        height: 40px;
        width: 380px;
        line-height: 40px;
        padding: 20px;
        color: #333;
        border: 2px solid #cccccc;
        font-weight: 300;

    }
    .err {
        font-weight: normal;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #f56c6c;
        position: absolute;
        left: 5px;
        bottom: -20px;
    }
    section#contact-us {
        background: #fff;

    }
    form{
        overflow: hidden;
    }
    form .form-control:focus {
        border-color: #cc8f49;
        color: #333;
    }
    section {
        position: relative;
        padding-bottom: 90px;
    }
    .contact-item {
        width: 1000px;
        height: 550px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        .tips{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: auto;
            height: 50px;
            margin: 150px auto;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            span{
                background: rgba(0,0,0,0.5);
                padding: 18px;
                border-radius: 4px;
            }

        }
        img {
            margin-top: 40px;
            margin-bottom: 40px;
        }
    }
    textarea.form-control {
        border-radius: 20px;
        height: auto;
        line-height: normal;
        border-radius: 0;
        font-size: 100%;
        outline: none;

    }
    .btn.btn-primary {
        margin: 0;
        width: 200px;
        height: 50px;
        background-color: #dc994a;
        border: none;
        color: #fff;
        border-radius: 2em;
        margin: auto;
        cursor:pointer;
        &:hover{
            background-color: #b37c3b;
        }
    }

    @media (min-width: 768px) {
        textarea.form-control {
            width: 840px;
        }
    }
    @media (max-width: 767px){

        .form-control{
            width: 100%;
        }
        .form-group {
            margin-left: 0;
            float: none;
            width: 100%;
        }
        .form-control,.form textarea.form-control{
            width: 100%;
        }
        .contact-item{
            margin-top: 20px;
            width: auto;
        }
    }
</style>