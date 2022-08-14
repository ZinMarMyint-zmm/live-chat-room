<template>
  <div class="chat-window">
    <div class="messages">
        <div class="single" v-for="message in messages" :key="message.id">
            <span class="created_at">{{message.created_at.toDate()}}</span>
            <span class="name">{{message.name}}</span>
            <span class="message">{{message.message}}</span>

        </div>
        
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let messages = ref([]);
        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let results=[];
            snap.docs.forEach((doc)=>{
                let document = {...doc.data(),id:doc.id}
                doc.data().created_at && results.push(document);
                
                // console.log(doc.data())
            })
            messages.value = results;
        })
        return {messages};
    }
}
</script>

<style>
.chat-window{
    background: #fafafa;
    padding: 30px 20px;
}
.single{
    margin: 18px 0;
}
.created_at{
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name{
    font-weight: bold;
    margin-right: 6px;
}
.messages{
    max-height: 400px;
    overflow: auto;
}
</style>