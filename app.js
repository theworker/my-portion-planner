
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



const proteinSwapCatalog = {
  "eggs": [
    "Eggs",
    "Plain Greek yogurt",
    "Cottage cheese",
    "Chicken breast",
    "Turkey breast",
    "Tofu",
    "Tempeh"
  ],
  "greek yogurt": [
    "Plain Greek yogurt",
    "Cottage cheese",
    "Eggs",
    "Chicken breast",
    "Turkey breast",
    "Tofu",
    "Tempeh"
  ],
  "cottage cheese": [
    "Cottage cheese",
    "Plain Greek yogurt",
    "Eggs",
    "Chicken breast",
    "Turkey breast",
    "Tofu",
    "Tempeh"
  ],
  "chicken": [
    "Chicken breast",
    "Turkey breast",
    "White fish",
    "Shrimp",
    "Tuna",
    "Lean beef",
    "Pork tenderloin",
    "Tofu",
    "Tempeh"
  ],
  "turkey": [
    "Turkey breast",
    "Chicken breast",
    "White fish",
    "Shrimp",
    "Tuna",
    "Lean beef",
    "Pork tenderloin",
    "Tofu",
    "Tempeh"
  ],
  "salmon": [
    "Salmon",
    "Chicken breast",
    "Turkey breast",
    "White fish",
    "Shrimp",
    "Tuna",
    "Lean beef",
    "Pork tenderloin",
    "Tofu",
    "Tempeh"
  ],
  "tuna": [
    "Tuna",
    "Chicken breast",
    "Turkey breast",
    "White fish",
    "Shrimp",
    "Salmon",
    "Lean beef",
    "Pork tenderloin",
    "Tofu",
    "Tempeh"
  ],
  "beef": [
    "Lean beef",
    "Chicken breast",
    "Turkey breast",
    "White fish",
    "Shrimp",
    "Pork tenderloin",
    "Tofu",
    "Tempeh"
  ],
  "steak": [
    "Lean steak",
    "Chicken breast",
    "Turkey breast",
    "White fish",
    "Shrimp",
    "Pork tenderloin",
    "Tofu",
    "Tempeh"
  ],
  "fish": [
    "White fish",
    "Chicken breast",
    "Turkey breast",
    "Shrimp",
    "Tuna",
    "Salmon",
    "Lean beef",
    "Pork tenderloin",
    "Tofu",
    "Tempeh"
  ]
};

function detectProteinSwap(detail){
  const text = detail.toLowerCase();
  if(text.includes("salmon")) return {key:"salmon", original:"Salmon"};
  if(text.includes("tuna")) return {key:"tuna", original:"Tuna"};
  if(text.includes("steak")) return {key:"steak", original:"Lean steak"};
  if(text.includes("lean beef") || text.includes("beef")) return {key:"beef", original:"Lean beef"};
  if(text.includes("white fish")) return {key:"fish", original:"White fish"};
  if(text.includes("turkey")) return {key:"turkey", original:"Turkey"};
  if(text.includes("chicken")) return {key:"chicken", original:"Chicken breast"};
  if(text.includes("cottage cheese")) return {key:"cottage cheese", original:"Cottage cheese"};
  if(text.includes("greek yogurt")) return {key:"greek yogurt", original:"Plain Greek yogurt"};
  if(text.includes("egg")) return {key:"eggs", original:"Eggs"};
  return null;
}

function swapId(dayNumber, mealIndex){
  return `${dayNumber}-${mealIndex}`;
}

const key = "myPortionPlanner_v7";

function freshProfile(name){
  return {
    name,
    date:new Date().toDateString(),
    portions:{},
    startWeight:null,
    weights:[],
    goal:null,
    selectedDay:1,
    mealSwaps:{}
  };
}

let stored = JSON.parse(localStorage.getItem(key) || "null");
let state;

if(stored && stored.profiles){
  state = stored;
} else {
  const v6 = JSON.parse(localStorage.getItem("myPortionPlanner_v6") || "null");
  const v5 = JSON.parse(localStorage.getItem("myPortionPlanner_v5") || "null");
  const v4 = JSON.parse(localStorage.getItem("myPortionPlanner_v4") || "null");
  const v3 = JSON.parse(localStorage.getItem("myPortionPlanner_v3") || "null");
  const v2 = JSON.parse(localStorage.getItem("myPortionPlanner_v2") || "null");
  const v1 = JSON.parse(localStorage.getItem("myPortionPlanner_v1") || "null");

  if(v6 && v6.profiles){
    state = v6;
  } else if(v5 && v5.profiles){
    state = v5;
  } else if(v4 && v4.profiles){
    state = v4;
  } else if(v3 && v3.profiles){
    state = v3;
  } else if(v2 && v2.profiles){
    state = {...v2, groceryPeople:v2.groceryPeople || 1};
  } else {
    const p1 = freshProfile("Me");
    if(v1){
      p1.date = v1.date || p1.date;
      p1.portions = v1.portions || {};
      p1.weights = Array.isArray(v1.weights) ? v1.weights : [];
      p1.startWeight = p1.weights[0]?.weight ?? 141;
      p1.goal = v1.goal ?? null;
      p1.selectedDay = v1.selectedDay || 1;
    }
    state = {
      activeProfile:"p1",
      profiles:{p1:p1,p2:freshProfile("Wife")},
      groceries:v1?.groceries || {},
      groceryPeople:1
    };
  }
}

Object.values(state.profiles).forEach(p=>{
  if(!Array.isArray(p.weights)) p.weights = [];
  if(p.startWeight === undefined) p.startWeight = null;
  if(!p.mealSwaps) p.mealSwaps = {};
});

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

function renderHeaderProfileSummary(){
  const pstate = profile();
  const start = Number(pstate.startWeight);
  const el = document.getElementById("headerProfileSummary");

  if(Number.isFinite(start) && start > 0){
    el.textContent = `${start.toFixed(1)} lb starting weight • weight-loss plan`;
  } else {
    el.textContent = "Starting weight not set • weight-loss plan";
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


function replaceProteinInDetail(detail, swap, replacement){
  if(!replacement) return detail;

  const patterns = {
    "Salmon": /salmon/ig,
    "Tuna": /tuna/ig,
    "Lean steak": /lean steak|steak/ig,
    "Lean beef": /lean beef|beef/ig,
    "White fish": /white fish/ig,
    "Turkey": /turkey/ig,
    "Chicken breast": /grilled chicken|chicken breast|chicken/ig,
    "Cottage cheese": /cottage cheese/ig,
    "Plain Greek yogurt": /greek yogurt/ig,
    "Eggs": /egg scramble|eggs|egg/ig
  };

  const rx = patterns[swap.original];
  return rx ? detail.replace(rx, replacement) : detail;
}

const proteinShoppingUnitOz = {
  "Salmon":6,
  "Chicken breast":6,
  "Turkey breast":6,
  "Turkey":6,
  "White fish":6,
  "Shrimp":6,
  "Tuna":5.5,
  "Lean beef":6,
  "Lean steak":6,
  "Pork tenderloin":6,
  "Tofu":6,
  "Tempeh":6
};

function getMealProtein(dayNumber, mealIndex, detail, profileState){
  const swap = detectProteinSwap(detail);
  if(!swap) return null;
  return profileState.mealSwaps?.[swapId(dayNumber, mealIndex)] || swap.original;
}

function collectProteinMealCounts(profileState){
  const counts = {};
  days.forEach(day=>{
    day.meals.forEach(([name,detail], mealIndex)=>{
      const p = getMealProtein(day.day, mealIndex, detail, profileState);
      if(p) counts[p] = (counts[p] || 0) + 1;
    });
  });
  return counts;
}

function formatProteinQty(name, mealCount){
  if(mealCount <= 0) return null;
  if(name === "Eggs") return `${mealCount * 2} eggs`;
  if(name === "Plain Greek yogurt") return `${mealCount * 6} oz`;
  if(name === "Cottage cheese") return `${mealCount * 6} oz`;

  const ozEach = proteinShoppingUnitOz[name] || 6;
  const totalOz = mealCount * ozEach;
  if(totalOz < 16) return `${Math.round(totalOz)} oz`;

  const lb = totalOz / 16;
  return lb % 1 === 0 ? `${lb.toFixed(0)} lb` : `${lb.toFixed(1)} lb`;
}

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

  day.meals.forEach(([name,detail,counts], mealIndex)=>{
    const div=document.createElement("div");
    div.className="meal-card";

    const chips = Object.entries(counts).filter(([,v])=>v>0).map(([k,v])=>{
      const p=PORTIONS.find(x=>x.key===k);
      return `<span class="chip" style="background:${p.color}20;color:${p.color}">${v} ${p.name}</span>`;
    }).join("");

    const swap = detectProteinSwap(detail);
    const id = swapId(day.day, mealIndex);
    const selectedSwap = pstate.mealSwaps?.[id] || null;

    let displayedDetail = detail;
    let swapUI = "";

    if(swap){
      const options = proteinSwapCatalog[swap.key] || [];
      const current = selectedSwap || swap.original;
      displayedDetail = replaceProteinInDetail(detail, swap, selectedSwap);

      swapUI = `
        <div class="meal-actions">
          <div class="swap-current">Protein: ${current}</div>
          <button class="swap-btn" type="button">Swap Food</button>
        </div>
        <div class="swap-panel hidden">
          <label>Choose a replacement. It stays saved until you change it or reset swaps.</label>
          <select>
            <option value="">Use original (${swap.original})</option>
            ${options.map(opt=>`<option value="${opt}" ${selectedSwap===opt ? "selected" : ""}>${opt}</option>`).join("")}
          </select>
        </div>`;
    }

    div.innerHTML=`
      <h3>${name}</h3>
      <div class="muted meal-detail">${displayedDetail}</div>
      <div class="chips">${chips}</div>
      ${swapUI}`;

    if(swap){
      const swapBtn = div.querySelector(".swap-btn");
      const panel = div.querySelector(".swap-panel");
      const select = div.querySelector(".swap-panel select");

      swapBtn.onclick=()=>panel.classList.toggle("hidden");

      select.onchange=()=>{
        const value = select.value;
        if(value){
          pstate.mealSwaps[id] = value;
        } else {
          delete pstate.mealSwaps[id];
        }
        save();
        renderMeals();
        renderGroceries();
      };
    }

    list.appendChild(div);
  });
}

document.getElementById("resetSwaps").onclick=()=>{
  const pstate = profile();
  const ok = confirm(`Reset all food swaps for ${pstate.name} back to the original 7-day meal plan?`);
  if(!ok) return;
  pstate.mealSwaps = {};
  save();
  renderMeals();
  renderGroceries();
};

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

  const active = profile();
  const profilesForShopping = people === 1
    ? [active]
    : [state.profiles.p1, state.profiles.p2];

  document.getElementById("grocerySummary").textContent =
    people === 1
      ? `Estimated quantities for ${active.name}'s full 7-day menu, including saved food swaps.`
      : `Estimated combined quantities for both profiles' full 7-day menus, including saved food swaps.`;

  const list=document.getElementById("groceryList");
  list.innerHTML="";

  const proteinTotals = {};
  profilesForShopping.forEach(pstate=>{
    const counts = collectProteinMealCounts(pstate);
    Object.entries(counts).forEach(([name,count])=>{
      proteinTotals[name] = (proteinTotals[name] || 0) + count;
    });
  });

  const proteinSec=document.createElement("div");
  proteinSec.className="grocery-section";
  proteinSec.innerHTML=`<h3>Proteins</h3>`;

  Object.entries(proteinTotals)
    .sort((a,b)=>a[0].localeCompare(b[0]))
    .forEach(([name,count])=>{
      const qty = formatProteinQty(name,count);
      const id = groceryId("Proteins",name);
      const checked = !!state.groceries[id];

      const row=document.createElement("label");
      row.className="grocery-item"+(checked?" checked":"");
      row.innerHTML=`
        <div class="grocery-item-main">
          <input type="checkbox" ${checked?"checked":""}>
          <span>${name}</span>
        </div>
        <span class="qty-badge">${qty}</span>`;

      row.querySelector("input").onchange=e=>{
        state.groceries[id]=e.target.checked;
        save();
        renderGroceries();
      };

      proteinSec.appendChild(row);
    });

  list.appendChild(proteinSec);

  Object.entries(groceries).forEach(([section,items])=>{
    if(section === "Proteins") return;

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

document.getElementById("clearGroceries").onclick=()=>{
  state.groceries={};
  save();
  renderGroceries();
};

function renderWeight(){
  const pstate = profile();
  const weights = pstate.weights
    .slice()
    .sort((a,b)=>new Date(a.date)-new Date(b.date));

  const start = Number(pstate.startWeight);
  const hasStart = Number.isFinite(start) && start > 0;
  const latestEntry = weights.at(-1);
  const latest = latestEntry ? Number(latestEntry.weight) : (hasStart ? start : null);

  document.getElementById("startWeight").textContent =
    hasStart ? `${start.toFixed(1)} lb` : "Not set";

  document.getElementById("latestWeight").textContent =
    latest !== null && Number.isFinite(latest) ? `${latest.toFixed(1)} lb` : "—";

  if(hasStart && latest !== null && Number.isFinite(latest)){
    const change = latest - start;
    document.getElementById("weightChange").textContent =
      `${change >= 0 ? "+" : ""}${change.toFixed(1)} lb`;
  } else {
    document.getElementById("weightChange").textContent = "—";
  }

  const startInput = document.getElementById("startWeightInput");
  startInput.value = hasStart ? start.toFixed(1) : "";

  const hist=document.getElementById("weightHistory");
  hist.innerHTML="";

  if(weights.length === 0){
    hist.innerHTML = `<div class="empty-history">No weigh-ins yet.</div>`;
    return;
  }

  [...weights].reverse().forEach(entry=>{
    const row=document.createElement("div");
    row.className="history-row";
    row.innerHTML=`
      <div class="history-main">
        <span>${new Date(entry.date).toLocaleDateString()}</span>
        <strong>${Number(entry.weight).toFixed(1)} lb</strong>
      </div>
      <button class="delete-weight" type="button">Delete</button>`;

    row.querySelector(".delete-weight").onclick=()=>{
      const ok = confirm(`Delete the ${Number(entry.weight).toFixed(1)} lb entry from ${new Date(entry.date).toLocaleDateString()}?`);
      if(!ok) return;
      const index = pstate.weights.findIndex(w=>w.date===entry.date && Number(w.weight)===Number(entry.weight));
      if(index >= 0){
        pstate.weights.splice(index,1);
        save();
        renderWeight();
        renderSettings();
      }
    };

    hist.appendChild(row);
  });
}

document.getElementById("saveStartWeight").onclick=()=>{
  const v=Number(document.getElementById("startWeightInput").value);
  if(v>0){
    profile().startWeight=v;
    save();
    renderHeaderProfileSummary();
    renderWeight();
    renderSettings();
  }
};

document.getElementById("addWeight").onclick=()=>{
  const input = document.getElementById("weightInput");
  const v=Number(input.value);
  if(v>0){
    profile().weights.push({
      id: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()),
      date:new Date().toISOString(),
      weight:v
    });
    input.value="";
    save();
    renderWeight();
    renderSettings();
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

  const start = Number(pstate.startWeight);
  document.getElementById("settingsStartWeight").textContent =
    Number.isFinite(start) && start > 0 ? `${start.toFixed(1)} lb` : "Not set";
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
  renderHeaderProfileSummary();
  renderToday();
  renderMeals();
  renderGroceries();
  renderWeight();
  renderSettings();
}

resetIfNewDay();
nav();
renderAll();
