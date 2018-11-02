let zhanghaoanquan = Vue.component('account-safe',{
    template:`
    <div>
    <div class="row user-msg text-left">
        <div class="user-msg-title">
            <h2><i class="fa fa-user-secret fa-2x"></i>账号安全</h2>
        </div>
    </div>
    <div class="line-border"></div>
    <main>
        <ul>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-check-circle"></i>绑定邮箱</div>
                    <div class="col-xs-4">{{userdata.email.emailvalue}}</div> 
                    <div class="col-xs-4">更换邮箱</div> 
                </div>
            </li>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-check-circle"></i>绑定手机</div>
                    <div class="col-xs-4">{{userdata.phone.phonevalue}}</div> 
                    <div class="col-xs-4">更换手机</div> 
                </div>
            </li>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-check-circle"></i>设置密码</div>
                    <div class="col-xs-4">{{userdata.password.passwordvalue}}</div> 
                    <div class="col-xs-4">更换密码</div> 
                </div>
            </li>
            <li class="safe-list-li">
                <div class="container">
                    <div class="col-xs-4 text-left"><i class="fa fa-fw fa-exclamation-circle"></i>密保问题</div>
                    <div class="col-xs-4">{{userdata.question.questionvalue}}</div> 
                    <div class="col-xs-4">设置</div> 
                </div>
            </li>
            <li class="safe-list-li">
            <div class="container">
                <div class="col-xs-4 text-left"><i class="fa fa-fw fa-exclamation-circle"></i>实名认证</div>
                <div class="col-xs-4">未实名认证</div> 
                <div class="col-xs-4"><router-link to="/shimingrenzheng"> 认证 </router-link></div> 
            </div>
            </li>
        </ul>
    </main>
</div>
    `,
    props:['usersafedata'],
    data:function(){
        return {
            userdata:{
            email:{if:1,emailvalue:"example@email.com"},
            phone:{if:1,phonevalue:13312345678},
            password:{if:1,passwordvalue:"已设置"},
            question:{if:0,questionvalue:"未设置密保问题"},
            certification:{if:0,certificationvalue:"未实名认证"}
            } 
        }
    },
    methods:{
        // ajaxsuccess:function(data){
        //     this.userdata=Object.assign({}, this.userdata,data)
        //     console.log(this.userdata)

        //     if(this.userdata.email.if != 1){
        //         this.userdata.email.emailvalue="未绑定邮箱"
        //     }
        //     if(this.userdata.phone.if != 1){
        //         this.userdata.phone.phonevalue="未绑定手机"
        //     }
        //     if(this.userdata.password.if != 1){
        //         this.userdata.password.passwordvalue="未设置密码"
        //     }else{
        //         this.userdata.password.passwordvalue="已设置密码"
        //     }
        //     if(this.userdata.question.if != 1){
        //         this.userdata.question.questiondvalue="未设置密保问题"
        //     }else{
        //         this.userdata.question.questiondvalue="已设置密保问题"
        //     }
        //     if(this.userdata.certification.if != 1){
        //         this.userdata.certification.certificationvalue="未实名认证"
        //     }else{
        //         this.userdata.certification.certificationvalue="已实名认证"
        //     }
        // }
    },
    mounted:function(){
        this.userdata=Object.assign({}, this.userdata,this.usersafedata)
        console.log(this.usersafedata)
        console.log(this.userdata)
    }
})