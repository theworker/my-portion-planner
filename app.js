
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
  "Proteins":[
    {name:"Eggs", q1:"18-count carton", q2:"36 eggs (2 × 18-count)"},
    {name:"Chicken breast", q1:"about 2 lb", q2:"about 4 lb"},
    {name:"Lean ground turkey", q1:"about 1½ lb", q2:"about 3 lb"},
    {name:"Lean beef or steak", q1:"about 1 lb", q2:"about 2 lb"},
    {name:"Salmon", q1:"1 fillet, about 6 oz", q2:"2 fillets, about 12 oz"},
    {name:"White fish", q1:"1 fillet, about 6 oz", q2:"2 fillets, about 12 oz"},
    {name:"Tuna", q1:"1 can, 5–6 oz", q2:"2 cans, 5–6 oz each"},
    {name:"Plain Greek yogurt", q1:"32 oz tub", q2:"64 oz total"},
    {name:"Cottage cheese", q1:"16 oz tub", q2:"32 oz total"}
  ],
  "Vegetables":[
    {name:"Spinach", q1:"1 large 8–10 oz bag", q2:"2 large 8–10 oz bags"},
    {name:"Mixed salad greens", q1:"2 large bags or tubs", q2:"4 large bags or tubs"},
    {name:"Broccoli", q1:"2 large heads or ~24 oz florets", q2:"4 large heads or ~48 oz florets"},
    {name:"Bell peppers", q1:"5–6", q2:"10–12"},
    {name:"Onions", q1:"3", q2:"6"},
    {name:"Zucchini", q1:"3", q2:"6"},
    {name:"Tomatoes", q1:"5–6 medium or 2 pints cherry", q2:"10–12 medium or 4 pints cherry"},
    {name:"Green beans", q1:"12 oz bag", q2:"24 oz total"},
    {name:"Asparagus", q1:"1 bunch", q2:"2 bunches"},
    {name:"Cauliflower", q1:"1 large head or ~20 oz florets", q2:"2 large heads or ~40 oz florets"}
  ],
  "Fruit":[
    {name:"Strawberries / blueberries", q1:"about 6 cups total", q2:"about 12 cups total"},
    {name:"Apples", q1:"2", q2:"4"},
    {name:"Bananas", q1:"2", q2:"4"},
    {name:"Oranges", q1:"1–2", q2:"3–4"},
    {name:"Grapes", q1:"about 1 lb", q2:"about 2 lb"},
    {name:"Peaches or melon", q1:"1–2 peaches or 1 small melon", q2:"3–4 peaches or 2 small melons"}
  ],
  "Carbs":[
    {name:"Old-fashioned oats", q1:"1 ~18 oz container", q2:"1 large ~42 oz container"},
    {name:"Brown rice", q1:"1 lb bag", q2:"2 lb bag"},
    {name:"Quinoa", q1:"1 small 10–12 oz bag", q2:"1 ~24 oz bag"},
    {name:"Sweet potatoes", q1:"2 medium", q2:"4 medium"},
    {name:"White or gold potatoes", q1:"2 medium", q2:"4 medium"},
    {name:"Whole-grain bread / English muffins", q1:"1 loaf + 1 package muffins", q2:"2 loaves + 2 packages muffins"},
    {name:"Whole-grain pasta", q1:"1 box", q2:"2 boxes"}
  ],
  "Fats & Extras":[
    {name:"Avocados", q1:"3 medium", q2:"6 medium"},
    {name:"Hummus", q1:"1 small 8 oz container", q2:"1 large 16 oz container"},
    {name:"Seeds", q1:"1 small 4–6 oz bag", q2:"1 8–12 oz bag"},
    {name:"Portion-friendly dressing", q1:"1 ~12 oz bottle", q2:"1 ~24 oz bottle or 2 small bottles"},
    {name:"Olive oil", q1:"1 small bottle", q2:"1 small bottle is usually enough"},
    {name:"Peanut or almond butter", q1:"1 small jar", q2:"1 standard jar is usually enough"}
  ]
};


const key = "myPortionPlanner_v3";

function freshProfile(name){
  return {
    name,
    date:new Date().toDateString(),
    portions:{},
    weights:[{date:new Date().toISOString(),weight:141}],
    goal:null,
    selectedDay:1
  };
}

let stored = JSON.parse(localStorage.getItem(key) || "null");
let state;

if(stored && stored.profiles){
  state = stored;
} else {
  // Migrate from v2 first, then v1 if needed.
  const v2 = JSON.parse(localStorage.getItem("myPortionPlanner_v2") || "null");
  if(v2 && v2.profiles){
    state = {
      ...v2,
      groceryPeople: v2.groceryPeople || 1
    };
  } else {
    const old = JSON.parse(localStorage.getItem("myPortionPlanner_v1") || "null");
    const p1 = freshProfile("Me");
    if(old){
      p1.date = old.date || p1.date;
      p1.portions = old.portions || {};
      p1.weights = old.weights || p1.weights;
      p1.goal = old.goal ?? null;
      p1.selectedDay = old.selectedDay || 1;
    }
    state = {
      activeProfile:"p1",
      profiles:{
        p1:p1,
        p2:freshProfile("Wife")
      },
      groceries: old?.groceries || {},
      groceryPeople: 1
    };
  }
}

if(!state.groceryPeople) state.groceryPeople = 1;

function save(){ localStorage.setItem(key, JSON.stringify(state)); }
function profile(){ return state.profiles[state.activeProfile]; }

function resetIfNewDay(){
  const p = profile();
  const today = new Date().toDateString();
  if(p.date !== today){
    p.date=today;
    p.portions={};
    save();
  }
}

function renderProfileSelector(){
  const select = document.getElementById("profileSelect");
  select.innerHTML = "";
  Object.entries(state.profiles).forEach(([id,p])=>{
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = p.name || (id==="p1" ? "Profile 1" : "Profile 2");
    if(id===state.activeProfile) opt.selected = true;
    select.appendChild(opt);
  });
  select.onchange = ()=>{
    state.activeProfile = select.value;
    resetIfNewDay();
    save();
    renderAll();
  };
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
  resetIfNewDay();
  const pstate = profile();
  document.getElementById("dateLabel").textContent =
    `${pstate.name} • ` + new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"});

  const grid = document.getElementById("portionGrid");
  grid.innerHTML="";
  let done=0,total=0;

  PORTIONS.forEach(p=>{
    const val = Number(pstate.portions[p.key]||0);
    done += Math.min(val,p.target);
    total += p.target;

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
    buttons[0].onclick=()=>{
      pstate.portions[p.key]=Math.max(0,val-1);
      save(); renderToday();
    };
    buttons[1].onclick=()=>{
      pstate.portions[p.key]=val+1;
      save(); renderToday();
    };
    grid.appendChild(card);
  });

  const pct = total ? Math.round(done/total*100) : 0;
  document.getElementById("overallProgress").style.width=pct+"%";
  document.getElementById("overallText").textContent=`${done} of ${total} daily portions checked`;
}

document.getElementById("resetToday").onclick=()=>{
  if(confirm(`Reset all of ${profile().name}'s portions for today?`)){
    profile().portions={};
    save();
    renderToday();
  }
};

function renderMeals(){
  const pstate = profile();
  const tabs=document.getElementById("dayTabs");
  tabs.innerHTML="";

  days.forEach(d=>{
    const b=document.createElement("button");
    b.textContent=`Day ${d.day}`;
    b.classList.toggle("active",pstate.selectedDay===d.day);
    b.onclick=()=>{
      pstate.selectedDay=d.day;
      save();
      renderMeals();
    };
    tabs.appendChild(b);
  });

  const day=days.find(d=>d.day===pstate.selectedDay)||days[0];
  const list=document.getElementById("mealList");
  list.innerHTML=`<div class="card"><h2>${pstate.name}: ${day.title}</h2></div>`;

  day.meals.forEach(([name,detail,counts])=>{
    const div=document.createElement("div");
    div.className="meal-card";
    const chips = Object.entries(counts).filter(([,v])=>v>0).map(([k,v])=>{
      const p=PORTIONS.find(x=>x.key===k);
      return `<span class="chip" style="background:${p.color}20;color:${p.color}">${v} ${p.name}</span>`;
    }).join("");
    div.innerHTML=`<h3>${name}</h3><div class="muted">${detail}</div><div class="chips">${chips}</div>`;
    list.appendChild(div);
  });
}

function groceryId(section,itemName){
  return btoa(unescape(encodeURIComponent(section+"|"+itemName))).replace(/=/g,"");
}

function setGroceryPeople(count){
  state.groceryPeople = count;
  save();
  renderGroceries();
}

function renderGroceries(){
  const people = state.groceryPeople || 1;
  const oneBtn = document.getElementById("onePersonBtn");
  const twoBtn = document.getElementById("twoPeopleBtn");
  oneBtn.classList.toggle("active", people === 1);
  twoBtn.classList.toggle("active", people === 2);

  document.getElementById("grocerySummary").textContent =
    people === 1
      ? "Estimated quantities for 1 person for the full 7-day Plan A menu."
      : "Estimated quantities for 2 people for the full 7-day Plan A menu.";

  const list=document.getElementById("groceryList");
  list.innerHTML="";

  Object.entries(groceries).forEach(([section,items])=>{
    const sec=document.createElement("div");
    sec.className="grocery-section";
    sec.innerHTML=`<h3>${section}</h3>`;

    items.forEach(item=>{
      const id=groceryId(section,item.name);
      const checked=!!state.groceries[id];
      const quantity = people === 2 ? item.q2 : item.q1;

      const row=document.createElement("label");
      row.className="grocery-item"+(checked?" checked":"");
      row.innerHTML=`
        <div class="grocery-item-main">
          <input type="checkbox" ${checked?"checked":""}>
          <span>${item.name}</span>
        </div>
        <span class="qty-badge">${quantity}</span>`;

      row.querySelector("input").onchange=e=>{
        state.groceries[id]=e.target.checked;
        save();
        renderGroceries();
      };
      sec.appendChild(row);
    });

    list.appendChild(sec);
  });
}

document.getElementById("onePersonBtn").onclick=()=>setGroceryPeople(1);
document.getElementById("twoPeopleBtn").onclick=()=>setGroceryPeople(2);

document.getElementById("clearGroceries").onclick=()=>{
  state.groceries={};
  save();
  renderGroceries();
};

function renderWeight(){
  const pstate = profile();
  const weights=pstate.weights.slice().sort((a,b)=>new Date(a.date)-new Date(b.date));
  const start=weights[0]?.weight ?? 141;
  const latest=weights.at(-1)?.weight ?? start;

  document.getElementById("startWeight").textContent=`${start.toFixed(1)} lb`;
  document.getElementById("latestWeight").textContent=`${latest.toFixed(1)} lb`;
  document.getElementById("weightChange").textContent=`${(latest-start>=0?"+":"")+(latest-start).toFixed(1)} lb`;

  const hist=document.getElementById("weightHistory");
  hist.innerHTML="";
  [...weights].reverse().forEach(w=>{
    const row=document.createElement("div");
    row.className="history-row";
    row.innerHTML=`<span>${new Date(w.date).toLocaleDateString()}</span><strong>${Number(w.weight).toFixed(1)} lb</strong>`;
    hist.appendChild(row);
  });
}

document.getElementById("addWeight").onclick=()=>{
  const v=Number(document.getElementById("weightInput").value);
  if(v>0){
    profile().weights.push({date:new Date().toISOString(),weight:v});
    save();
    renderWeight();
  }
};

function renderSettings(){
  const pstate = profile();
  const input=document.getElementById("goalInput");
  const saved=document.getElementById("goalSaved");
  input.value = pstate.goal || "";
  saved.textContent = pstate.goal ? `Saved goal for ${pstate.name}: ${Number(pstate.goal).toFixed(1)} lb` : "";

  document.getElementById("profile1Name").value = state.profiles.p1.name || "";
  document.getElementById("profile2Name").value = state.profiles.p2.name || "";
}

document.getElementById("saveGoal").onclick=()=>{
  const v=Number(document.getElementById("goalInput").value);
  profile().goal=v>0?v:null;
  save();
  renderSettings();
};

document.getElementById("saveProfileNames").onclick=()=>{
  const n1=document.getElementById("profile1Name").value.trim();
  const n2=document.getElementById("profile2Name").value.trim();
  state.profiles.p1.name = n1 || "Profile 1";
  state.profiles.p2.name = n2 || "Profile 2";
  save();
  renderProfileSelector();
  renderAll();
};

let deferredPrompt;
window.addEventListener("beforeinstallprompt",(e)=>{
  e.preventDefault();
  deferredPrompt=e;
  const b=document.getElementById("installBtn");
  b.classList.remove("hidden");
  b.onclick=async()=>{
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    b.classList.add("hidden");
  };
});

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js");
}

function renderAll(){
  renderProfileSelector();
  renderToday();
  renderMeals();
  renderGroceries();
  renderWeight();
  renderSettings();
}

resetIfNewDay();
nav();
renderAll();
