let h_count= parseInt( document.getElementById("heart_count").innerText)
let c_count= parseInt(document.getElementById("coin_count").innerText)
let call_History_data=[];
// -------------------------For heart Icon------------------------------

document.getElementById("heart_icon_1").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_2").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_3").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_4").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_5").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_6").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_7").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_8").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
document.getElementById("heart_icon_9").addEventListener("click",function(e){
    e.preventDefault();
    h_count++;
    document.getElementById("heart_count").innerText =h_count;
})
// -------------------------**************------------------------------

// -------------------------Call Button ------------------------------

//National Emergency Number
document.getElementById("call_btn_1").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling National Emergency Service 999.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
    const data ={
        service_name:"National Emergency Number",
        service_number:"999",
        date:new Date().toLocaleTimeString()
    }
    call_History_data.push(data);

    const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
})
//Police Helpline Service
document.getElementById("call_btn_2").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Police Helpline Service 999.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
        const data ={
        service_name:"Police Helpline",
        service_number:"999",
        date:new Date().toLocaleTimeString()
    }
    call_History_data.push(data);

        const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
})
//Fire Service
document.getElementById("call_btn_3").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Fire Service 999.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
        const data ={
        service_name:"Fire Service",
        service_number:"999",
        date:new Date().toLocaleTimeString()
        }
    call_History_data.push(data);

        const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
    
})
//Ambulance Service
document.getElementById("call_btn_4").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Ambulance Service 1994-99999.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
    const data ={
        service_name:"Ambulance Service",
        service_number:"1994-99999",
        date:new Date().toLocaleTimeString()
    }
    call_History_data.push(data);

        const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
})
//Women & Child Helpline Service
document.getElementById("call_btn_5").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Women & Child Helpline Service 109.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
        const data ={
        service_name:"Women & Child Helpline",
        service_number:"109",
        date:new Date().toLocaleTimeString()
    }
    call_History_data.push(data);

    const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
})
//Anti-Corruption Helpline
document.getElementById("call_btn_6").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Anti-Corruption Helpline Service 106.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
        const data ={
        service_name:"Anti-Corruption Helpline",
        service_number:"106",
        date:new Date().toLocaleTimeString()
    }
    call_History_data.push(data);

        const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
})
//Electricity Helpline Service
document.getElementById("call_btn_7").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Electricity Helpline Service 16216.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
        const data ={
        service_name:"Electricity Helpline",
        service_number:"16216",
        date:new Date().toLocaleTimeString()
    }
    call_History_data.push(data);

    const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
})
//Brac Helpline Service
document.getElementById("call_btn_8").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Brac Helpline Service 16445.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
        const data ={
        service_name:"Brac Helpline",
        service_number:"16445",
        date:new Date().toLocaleTimeString()
    }
    call_History_data.push(data);

        const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
})
//Bangladesh Railway Helpline
document.getElementById("call_btn_9").addEventListener("click",function(e){
    e.preventDefault();
    if(c_count >= 20){
        c_count -=20;
        alert("Calling Bangladesh Railway Helpline Service 163.....")
        document.getElementById("coin_count").innerText = c_count;
    }
    else{
        return alert("You don't have enough coin to Call.")
    }
        const data ={
        service_name:"Bangladesh Railway Helpline",
        service_number:"163",
        date:new Date().toLocaleTimeString()
    }
    call_History_data.push(data);

    const call_history_container=document.getElementById("call-history-con")
    const div = document.createElement("div")
    for (const item of call_History_data) {
        
        div.innerHTML=`
            <div class="flex justify-between my-6">
                <div>
                <p>${item.service_name}</p>
                <p>${item.service_number}</p>
                </div>
                <div class="flex justify-center items-center">
                <p>${item.date}</p>
                </div>
            </div>
            `    }
call_history_container.appendChild(div);
})
// -------------------------Clear Button ------------------------------
document.getElementById("clear_button").addEventListener("click",function(e){
    e.preventDefault()
    call_History_data=[];
    const call_history_container=document.getElementById("call-history-con")
    call_history_container.innerHTML="";

})
// -------------------------Copy button------------------------------
let copy_count=parseInt(document.getElementById("copy-count").innerText)
document.getElementById("cpy_1").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:999")
    copy_count++;

    const numberText = document.getElementById("num_1").innerText;
    navigator.clipboard.writeText(numberText)

    document.getElementById("copy-count").innerText = copy_count;
})

document.getElementById("cpy_2").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:999")
    copy_count++;

    const numberText = document.getElementById("num_2").innerText;
    navigator.clipboard.writeText(numberText)
    
    document.getElementById("copy-count").innerText = copy_count;
})

document.getElementById("cpy_3").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:999")
    copy_count++;

    const numberText = document.getElementById("num_3").innerText;
    navigator.clipboard.writeText(numberText)
    
    document.getElementById("copy-count").innerText = copy_count;
})

document.getElementById("cpy_4").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:1994-99999")
    copy_count++;

    const numberText = document.getElementById("num_4").innerText;
    navigator.clipboard.writeText(numberText)
    
    document.getElementById("copy-count").innerText = copy_count;
})

document.getElementById("cpy_5").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:109")
    copy_count++;

    const numberText = document.getElementById("num_5").innerText;
    navigator.clipboard.writeText(numberText)
    
    document.getElementById("copy-count").innerText = copy_count;
})

document.getElementById("cpy_6").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:106")
    copy_count++;

    const numberText = document.getElementById("num_6").innerText;
    navigator.clipboard.writeText(numberText)
    
    document.getElementById("copy-count").innerText = copy_count;
})

document.getElementById("cpy_7").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:16216")
    copy_count++;

    const numberText = document.getElementById("num_7").innerText;
    navigator.clipboard.writeText(numberText)
    
    document.getElementById("copy-count").innerText = copy_count;
})

document.getElementById("cpy_8").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:16445")
    copy_count++;

    const numberText = document.getElementById("num_8").innerText;
    navigator.clipboard.writeText(numberText)
    
    document.getElementById("copy-count").innerText = copy_count;
})

document.getElementById("cpy_9").addEventListener("click",function(e){
    e.preventDefault;
    alert("Number Copied:163")
    copy_count++;

    const numberText = document.getElementById("num_9").innerText;
    navigator.clipboard.writeText(numberText)
    
    document.getElementById("copy-count").innerText = copy_count;
})