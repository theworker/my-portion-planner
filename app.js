
const PORTIONS = [
  {key:"green",name:"Green",sub:"Vegetables",target:4,color:"#2d9b4f"},
  {key:"purple",name:"Purple",sub:"Fruit",target:2,color:"#7a49b8"},
  {key:"red",name:"Red",sub:"Protein",target:4,color:"#cf4848"},
  {key:"yellow",name:"Yellow",sub:"Carbs",target:2,color:"#d2aa00"},
  {key:"blue",name:"Blue",sub:"Healthy Fats",target:1,color:"#3d7dd8"},
  {key:"orange",name:"Orange",sub:"Seeds / Dressing",target:1,color:"#e7802d"},
  {key:"teaspoon",name:"Tsp",sub:"Oils / Nut Butters",target:3,color:"#8c6545"},
];

const days = [
  {day:1,title:"Chicken & Taco Day",meals:[
    ["Breakfast","Egg scramble with spinach and peppers, oatmeal, and berries.",{green:1,purple:1,red:1,yellow:1,teaspoon:1}],
    ["Snack","Greek yogurt with strawberries.",{purple:1,red:1}],
    ["Lunch","Grilled chicken salad with mixed vegetables, avocado, and dressing.",{green:2,red:1,blue:1,orange:1,teaspoon:1}],
    ["Dinner","Turkey taco bowl with lettuce, tomato, brown rice, and sautéed vegetables.",{green:1,red:1,yellow:1,teaspoon:1}]
  ]},
  {day:2,title:"Turkey & Salmon Day",meals:[
    ["Breakfast","Eggs with zucchini, whole-grain toast, and an orange.",{green:1,purple:1,red:1,yellow:1,teaspoon:1}],
    ["Snack","Cottage cheese with blueberries.",{purple:1,red:1}],
    ["Lunch","Turkey lettuce wraps with crunchy vegetables, hummus, and seeds.",{green:2,red:1,blue:1,orange:1,teaspoon:1}],
    ["Dinner","Baked salmon with broccoli and roasted sweet potato.",{green:1,red:1,yellow:1,teaspoon:1}]
  ]},
  {day:3,title:"Chicken Pasta Day",meals:[
    ["Breakfast","Greek yogurt bowl with banana, oats, and a little nut butter.",{purple:1,red:1,yellow:1,teaspoon:1}],
    ["Snack","Hard-boiled eggs with apple slices.",{purple:1,red:1}],
    ["Lunch","Chicken chopped salad with mixed vegetables, avocado, dressing, and olive oil.",{green:2,red:1,blue:1,orange:1,teaspoon:1}],
    ["Dinner","Lean beef and vegetable whole-grain pasta bowl.",{green:2,red:1,yellow:1,teaspoon:1}]
  ]},
  {day:4,title:"Tuna & Chicken Day",meals:[
    ["Breakfast","Vegetable omelet, oatmeal, and melon.",{green:1,purple:1,red:1,yellow:1,teaspoon:1}],
    ["Snack","Greek yogurt with grapes.",{purple:1,red:1}],
    ["Lunch","Tuna salad stuffed into peppers with avocado and dressing.",{green:2,red:1,blue:1,orange:1,teaspoon:1}],
    ["Dinner","Grilled chicken, green beans, and quinoa.",{green:1,red:1,yellow:1,teaspoon:1}]
  ]},
  {day:5,title:"Turkey Burger Day",meals:[
    ["Breakfast","Eggs with spinach, whole-grain English muffin, and berries.",{green:1,purple:1,red:1,yellow:1,teaspoon:1}],
    ["Snack","Cottage cheese with peach slices.",{purple:1,red:1}],
    ["Lunch","Chicken and vegetable salad with avocado, seeds, and dressing.",{green:2,red:1,blue:1,orange:1,teaspoon:1}],
    ["Dinner","Turkey burger patty with roasted vegetables and baked potato.",{green:1,red:1,yellow:1,teaspoon:1}]
  ]},
  {day:6,title:"Steak & Chicken Day",meals:[
    ["Breakfast","Greek yogurt, berries, oats, and a teaspoon of nut butter.",{purple:1,red:1,yellow:1,teaspoon:1}],
    ["Snack","Eggs with an apple.",{purple:1,red:1}],
    ["Lunch","Chicken fajita salad with peppers, onions, avocado, and dressing.",{green:2,red:1,blue:1,orange:1,teaspoon:1}],
    ["Dinner","Lean steak with asparagus, cauliflower, and brown rice.",{green:2,red:1,yellow:1,teaspoon:1}]
  ]},
  {day:7,title:"Fish & Taco Day",meals:[
    ["Breakfast","Egg scramble with vegetables, oatmeal, and banana.",{green:1,purple:1,red:1,yellow:1,teaspoon:1}],
    ["Snack","Greek yogurt with berries.",{purple:1,red:1}],
    ["Lunch","Turkey taco salad with lettuce, tomato, avocado, seeds, and dressing.",{green:2,red:1,blue:1,orange:1,teaspoon:1}],
    ["Dinner","White fish with roasted vegetables and sweet potato.",{green:1,red:1,yellow:1,teaspoon:1}]
  ]}
];

const groceries = {
  "Proteins":["Eggs","Chicken breast","Lean ground turkey","Lean beef or steak","Salmon","White fish","Tuna","Plain Greek yogurt","Cottage cheese"],
  "Vegetables":["Spinach","Mixed salad greens","Broccoli","Bell peppers","Onions","Zucchini","Tomatoes","Green beans","Asparagus","Cauliflower"],
  "Fruit":["Strawberries / blueberries","Apples","Bananas","Oranges","Grapes","Peaches or melon"],
  "Carbs":["Old-fashioned oats","Brown rice","Quinoa","Sweet potatoes","White or gold potatoes","Whole-grain bread / English muffins","Whole-grain pasta"],
  "Fats & Extras":["Avocados","Hummus","Seeds","Portion-friendly dressing","Olive oil","Peanut or almond butter"]
};

const key = "myPortionPlanner_v1";
let state = JSON.parse(localStorage.getItem(key) || "null") || {
  date:new Date().toDateString(),
  portions:{},
  groceries:{},
  weights:[{date:new Date().toISOString(),weight:141}],
  goal:null,
  selectedDay:1
};

function save(){ localStorage.setItem(key, JSON.stringify(state)); }

function resetIfNewDay(){
  const today = new Date().toDateString();
  if(state.date !== today){
    state.date=today; state.portions={}; save();
  }
}

function nav(){
  document.querySelectorAll(".nav-btn").forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b===btn));
      document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===btn.dataset.page));
      window.scrollTo({top:0,behavior:"smooth"});
    };
  });
}

function renderToday(){
  document.getElementById("dateLabel").textContent = new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"});
  const grid = document.getElementById("portionGrid");
  grid.innerHTML="";
  let done=0,total=0;
  PORTIONS.forEach(p=>{
    const val = Number(state.portions[p.key]||0);
    done += Math.min(val,p.target); total += p.target;
    const card=document.createElement("div");
    card.className="portion-card";
    card.innerHTML=`
      <div class="portion-top">
        <div class="dot" style="background:${p.color}"></div>
        <div><div class="portion-title">${p.name}</div><div class="portion-sub">${p.sub}</div></div>
      </div>
      <div class="counter">
        <button aria-label="Subtract ${p.name}">−</button>
        <strong>${val} / ${p.target}</strong>
        <button aria-label="Add ${p.name}">+</button>
      </div>
      <div class="mini-progress"><div style="width:${Math.min(100,val/p.target*100)}%;background:${p.color}"></div></div>`;
    const buttons=card.querySelectorAll("button");
    buttons[0].onclick=()=>{state.portions[p.key]=Math.max(0,val-1);save();renderToday()};
    buttons[1].onclick=()=>{state.portions[p.key]=val+1;save();renderToday()};
    grid.appendChild(card);
  });
  const pct = total ? Math.round(done/total*100) : 0;
  document.getElementById("overallProgress").style.width=pct+"%";
  document.getElementById("overallText").textContent=`${done} of ${total} daily portions checked`;
}
document.getElementById("resetToday").onclick=()=>{
  if(confirm("Reset all of today's portions?")){state.portions={};save();renderToday();}
};

function renderMeals(){
  const tabs=document.getElementById("dayTabs"); tabs.innerHTML="";
  days.forEach(d=>{
    const b=document.createElement("button"); b.textContent=`Day ${d.day}`;
    b.classList.toggle("active",state.selectedDay===d.day);
    b.onclick=()=>{state.selectedDay=d.day;save();renderMeals()};
    tabs.appendChild(b);
  });
  const day=days.find(d=>d.day===state.selectedDay)||days[0];
  const list=document.getElementById("mealList"); list.innerHTML=`<div class="card"><h2>${day.title}</h2></div>`;
  day.meals.forEach(([name,detail,counts])=>{
    const div=document.createElement("div"); div.className="meal-card";
    const chips = Object.entries(counts).filter(([,v])=>v>0).map(([k,v])=>{
      const p=PORTIONS.find(x=>x.key===k); return `<span class="chip" style="background:${p.color}20;color:${p.color}">${v} ${p.name}</span>`;
    }).join("");
    div.innerHTML=`<h3>${name}</h3><div class="muted">${detail}</div><div class="chips">${chips}</div>`;
    list.appendChild(div);
  });
}

function groceryId(section,item){return btoa(unescape(encodeURIComponent(section+"|"+item))).replace(/=/g,"");}
function renderGroceries(){
  const list=document.getElementById("groceryList");list.innerHTML="";
  Object.entries(groceries).forEach(([section,items])=>{
    const sec=document.createElement("div");sec.className="grocery-section";
    sec.innerHTML=`<h3>${section}</h3>`;
    items.forEach(item=>{
      const id=groceryId(section,item), checked=!!state.groceries[id];
      const row=document.createElement("label");row.className="grocery-item"+(checked?" checked":"");
      row.innerHTML=`<input type="checkbox" ${checked?"checked":""}><span>${item}</span>`;
      row.querySelector("input").onchange=e=>{state.groceries[id]=e.target.checked;save();renderGroceries()};
      sec.appendChild(row);
    });
    list.appendChild(sec);
  });
}
document.getElementById("clearGroceries").onclick=()=>{state.groceries={};save();renderGroceries()};

function renderWeight(){
  const weights=state.weights.slice().sort((a,b)=>new Date(a.date)-new Date(b.date));
  const start=weights[0]?.weight ?? 141, latest=weights.at(-1)?.weight ?? start;
  document.getElementById("startWeight").textContent=`${start.toFixed(1)} lb`;
  document.getElementById("latestWeight").textContent=`${latest.toFixed(1)} lb`;
  document.getElementById("weightChange").textContent=`${(latest-start>=0?"+":"")+(latest-start).toFixed(1)} lb`;
  const hist=document.getElementById("weightHistory");hist.innerHTML="";
  [...weights].reverse().forEach(w=>{
    const row=document.createElement("div");row.className="history-row";
    row.innerHTML=`<span>${new Date(w.date).toLocaleDateString()}</span><strong>${Number(w.weight).toFixed(1)} lb</strong>`;
    hist.appendChild(row);
  });
}
document.getElementById("addWeight").onclick=()=>{
  const v=Number(document.getElementById("weightInput").value);
  if(v>0){state.weights.push({date:new Date().toISOString(),weight:v});save();renderWeight();}
};

function renderSettings(){
  const input=document.getElementById("goalInput");
  const saved=document.getElementById("goalSaved");
  if(state.goal){input.value=state.goal;saved.textContent=`Saved goal: ${Number(state.goal).toFixed(1)} lb`;}
}
document.getElementById("saveGoal").onclick=()=>{
  const v=Number(document.getElementById("goalInput").value);
  state.goal=v>0?v:null;save();renderSettings();
};

let deferredPrompt;
window.addEventListener("beforeinstallprompt",(e)=>{
  e.preventDefault(); deferredPrompt=e;
  const b=document.getElementById("installBtn"); b.classList.remove("hidden");
  b.onclick=async()=>{deferredPrompt.prompt(); await deferredPrompt.userChoice; b.classList.add("hidden");};
});

if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js");}

resetIfNewDay();
nav();
renderToday();
renderMeals();
renderGroceries();
renderWeight();
renderSettings();
