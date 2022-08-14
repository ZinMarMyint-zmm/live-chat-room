<template>
  <nav v-if="user">
    <div>
        <p>Hi {{user.displayName}}</p>
        <p class="email">logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Log out</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'
export default {
    setup(){
        
        let {user} = getUser();
        let {error,logoutUser} = useLogout();
        let logout=async()=>{
            await logoutUser()
        }
        
        return {logout,user,error,logoutUser}
    }
}
</script>

<style>
    nav{
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p{
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email{
        font-size: 14px;
        color:#999;
    }
</style>