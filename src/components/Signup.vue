<template>
  <h2>Sign up</h2>
  <form @submit.prevent="signUp">
        <input type="text" placeholder="display name" v-model="displayName">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button>Sign up</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'
export default {
    setup(){
        let error=ref(null);
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let signUp=async()=>{
            try{
            let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
            if(!res){
                throw new Error("Could not create new user")
            }
            res.user.updateProfile({displayName:displayName.value})
            }catch(err){
                error.value=err.message;
                console.log(error.value)
            }         
        }

        return {displayName,email,password,signUp}
    }
}

</script>

<style>

</style>