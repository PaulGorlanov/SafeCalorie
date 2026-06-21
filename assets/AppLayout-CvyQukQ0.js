import{C as e,F as t,G as n,H as r,L as i,M as a,N as o,P as s,Q as c,S as l,W as u,X as d,a as f,b as p,d as m,et as h,h as g,i as _,l as v,n as y,q as b,r as x,u as ee,v as S,w as te,x as C,y as ne}from"./index-CFk553Rf.js";import{t as w}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{a as re,c as ie,d as T,h as ae,i as oe,l as se,m as ce,n as le,p as ue,r as E,t as de,u as fe}from"./aiUsage-CY1GRe0B.js";import{a as D,c as O,i as k,o as A,r as j,t as pe}from"./diary-CAbDmAXe.js";var M={type:`json_schema`,json_schema:{name:`nutrition_proposal`,strict:!0,schema:{type:`object`,properties:{text:{type:`string`,description:`Краткий ответ на русском`},name:{type:`string`,description:`Название блюда`},calories:{type:`number`,description:`Калории на указанную порцию`},protein:{type:`number`,description:`Белки в граммах`},carbs:{type:`number`,description:`Углеводы в граммах`},fat:{type:`number`,description:`Жиры в граммах`},portionWeight:{type:`number`,description:`Вес порции в граммах`}},required:[`text`,`name`,`calories`,`protein`,`carbs`,`fat`,`portionWeight`],additionalProperties:!1}}};function N(e){if(!e)return null;try{let t=JSON.parse(e);return String(t.name??``).trim()?{text:String(t.text??``).trim()||`Оценка блюда`,proposals:[F(t)]}:null}catch{return null}}var P={type:`json_schema`,json_schema:{name:`meal_proposals`,strict:!0,schema:{type:`object`,properties:{text:{type:`string`,description:`Краткий ответ на русском (1–2 предложения)`},items:{type:`array`,description:`Блюда для записи в дневник, каждое отдельно`,items:{type:`object`,properties:{name:{type:`string`,description:`Название блюда`},calories:{type:`number`,description:`Ккал на порцию`},protein:{type:`number`,description:`Белки, г`},carbs:{type:`number`,description:`Углеводы, г`},fat:{type:`number`,description:`Жиры, г`},portionWeight:{type:`number`,description:`Вес порции, г`},mealType:{type:`string`,enum:[`breakfast`,`lunch`,`dinner`,`snack`],description:`Рекомендуемый приём пищи`}},required:[`name`,`calories`,`protein`,`carbs`,`fat`,`portionWeight`,`mealType`],additionalProperties:!1}}},required:[`text`,`items`],additionalProperties:!1}}};function F(e){return{name:String(e.name??``).trim(),...O({calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,portionWeight:e.portionWeight}),suggestedMealType:e.mealType||null,status:`pending`}}function me(e){if(!e)return null;try{let t=JSON.parse(e),n=String(t.text??``).trim();if(Array.isArray(t.items)&&t.items.length){let e=t.items.map(F).filter(e=>e.name&&e.name.length>=3&&e.calories>=20);return e.length?{text:n||`Предлагаю добавить в дневник:`,proposals:e}:null}if(t.name){let e=F(t);return e.name?{text:n||`Оценка блюда`,proposals:[e]}:null}}catch{return null}return null}function he(e,{toolInvocations:t=[],userText:n=``}={}){let r={...e,updatedAt:Date.now()};for(let{name:e,args:n}of t)(e===`get_diary_summary`||e===`list_food_entries`)&&(r.lastTopic=`diary`,n?.date&&(r.lastDiaryDate=n.date),n?.mealType&&(r.lastMealType=n.mealType)),e===`get_profile`&&(r.lastTopic=`profile`),e===`search_foods`&&n?.query&&(r.lastTopic=`food_search`,r.lastFoodQuery=n.query);ct(n)&&(r.lastTopic=`food_log`);let i=(n??``).trim();return i&&(r.lastUserMessage=i.length>200?`${i.slice(0,200)}…`:i),r}function I(e){if(!e)return``;let t=[];return e.lastTopic===`diary`&&(e.lastDiaryDate?t.push(`недавно смотрели дневник за ${e.lastDiaryDate}`):t.push(`недавно обсуждали дневник питания`),e.lastMealType&&t.push(`приём пищи: ${A(e.lastMealType)}`)),e.lastTopic===`profile`&&t.push(`недавно спрашивали о профиле и норме`),e.lastTopic===`food_search`&&e.lastFoodQuery&&t.push(`недавно искали блюдо «${e.lastFoodQuery}»`),t.length?`
Контекст текущего чата: ${t.join(`, `)}.
Учитывай его в уточнениях («а вчера?», «а на завтраке?», «подробнее») — сам выбери инструмент и дату.`:``}function ge(e){return e.length<=24?e:e.slice(-24)}var L=[{id:`menu-today`,label:`Меню на сегодня`,text:`Составь меню на сегодня`,shortcut:`/меню`,icon:`lucide:calendar-days`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`составь меню на сегодня`||t===`/меню`||t===`/menu`||t.startsWith(`/меню `)||t.startsWith(`/menu `)}},{id:`week-analysis`,label:`Анализ за неделю`,text:`Дай анализ питания за неделю`,shortcut:`/неделя`,icon:`lucide:chart-line`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`дай анализ питания за неделю`||t===`анализ за неделю`||t===`анализ питания за неделю`||t===`/неделя`||t===`/week`||t.startsWith(`/неделя `)||t.startsWith(`/week `)}},{id:`today-analysis`,label:`Анализ за сегодня`,text:`Проанализируй питание за сегодня`,shortcut:`/сегодня`,icon:`lucide:pie-chart`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`проанализируй питание за сегодня`||t===`анализ за сегодня`||t===`анализ питания за сегодня`||t===`/сегодня`||t===`/today`||t.startsWith(`/сегодня `)||t.startsWith(`/today `)}},{id:`remaining-today`,label:`Остаток на сегодня`,text:`Сколько осталось на сегодня`,shortcut:`/остаток`,icon:`lucide:gauge`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`сколько осталось на сегодня`||t===`остаток на сегодня`||t===`что осталось на сегодня`||t===`/остаток`||t===`/remaining`||t.startsWith(`/остаток `)}},{id:`snack-idea`,label:`Что перекусить`,text:`Что перекусить сейчас`,shortcut:`/перекус`,icon:`lucide:cookie`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`что перекусить сейчас`||t===`что перекусить`||t===`предложи перекус`||t===`идея перекуса`||t===`/перекус`||t===`/snack`||t.startsWith(`/перекус `)}},{id:`macro-balance`,label:`Как добрать БЖУ`,text:`Как добрать БЖУ до нормы`,shortcut:`/бжу`,icon:`lucide:scale`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`как добрать бжу до нормы`||t===`как добрать бжу`||t===`баланс бжу`||t===`как добрать белок`||t===`/бжу`||t===`/macros`||t.startsWith(`/бжу `)}},{id:`yesterday-recap`,label:`Что ел вчера`,text:`Что я ел вчера`,shortcut:`/вчера`,icon:`lucide:history`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`что я ел вчера`||t===`что ел вчера`||t===`итог за вчера`||t===`/вчера`||t===`/yesterday`||t.startsWith(`/вчера `)}}];function _e(e){let t=e?.trim();if(!t)return null;let n=L.find(e=>e.match(t));if(n)return n;let r=t.toLowerCase().replace(/[.!?…]+$/g,``).trim();return/составь\s+меню/.test(r)&&/(сегодня|на\s+день|на\s+сегодня)/.test(r)?L.find(e=>e.id===`menu-today`)??null:/анализ.*недел|итог.*недел|разбор.*недел|оцен.*недел|как\s+(?:я\s+)?питался/.test(r)?L.find(e=>e.id===`week-analysis`)??null:/анализ.*сегодня|проанализируй.*(?:калор|питан)|итог.*сегодня|разбор.*сегодня/.test(r)?L.find(e=>e.id===`today-analysis`)??null:/осталось.*(?:сегодня|на\s+день)|остаток.*(?:сегодня|дня)|сколько.*ещё.*есть/.test(r)?L.find(e=>e.id===`remaining-today`)??null:/что\s+перекусить|предложи\s+перекус|идея\s+перекуса|что\s+перекусить\s+сейчас/.test(r)?L.find(e=>e.id===`snack-idea`)??null:/добрать.*бжу|баланс\s+бжу|не\s+хватает.*белк|как\s+добрать.*(?:белк|углевод|жир)/.test(r)?L.find(e=>e.id===`macro-balance`)??null:/что\s+(?:я\s+)?ел.*вчера|итог.*вчера|вчера.*(?:ел|съел)/.test(r)?L.find(e=>e.id===`yesterday-recap`)??null:null}function R(e,t=1){let n=Number(e)||0;return Number.isInteger(n)?String(n):n.toFixed(t)}function z({calories:e,protein:t,carbs:n,fat:r}){return`${R(e,0)} ккал · Б ${R(t)} / У ${R(n)} / Ж ${R(r)} г`}function B(e,t=120){if(!e.length)return`Каталог пуст. Предложи свои сбалансированные варианты блюд с оценкой КБЖУ.`;let n=e.slice(0,t).map(e=>`• ${e.name}: ${R(e.calories,0)} ккал, Б ${R(e.protein)} / У ${R(e.carbs)} / Ж ${R(e.fat)} на ${R(e.portionWeight??100,0)} г`);return e.length>t&&n.push(`… и ещё ${e.length-t} блюд в каталоге`),n.join(`
`)}function V(e){return e?.length?e.map((e,t)=>`${t+1}. [${e.meal}] ${e.name} — ${R(e.weight,0)} г, ${R(e.calories,0)} ккал, Б ${R(e.protein)} / У ${R(e.carbs)} / Ж ${R(e.fat)}`).join(`
`):`Сегодня в дневнике пока ничего не записано.`}function H(e){return D.map(({label:t})=>{let n=e?.[t];return n?.length?`${t}: ${n.map(e=>`${e.name} (${R(e.weight,0)} г, ${z(e)})`).join(`; `)}`:`${t}: ничего не записано`}).join(`
`)}var ve={breakfast:.25,lunch:.35,dinner:.3,snack:.1};function ye(e){return D.map(({id:t,label:n})=>{let r=e?.meals?.[n]??[];return{id:t,label:n,filled:r.length>0,items:r}})}function U(e,t){if(!t.length)return{targets:[],minMenuCalories:0,targetMenuCalories:0};let n=t.reduce((e,t)=>e+(ve[t.id]??.25),0),r=Math.max(0,Math.round(e.calories)),i=Math.round(r*.85);return{targets:t.map(t=>{let i=(ve[t.id]??.25)/n;return{...t,targetCalories:Math.round(r*i),targetProtein:Math.round(e.protein*i*10)/10,targetCarbs:Math.round(e.carbs*i*10)/10,targetFat:Math.round(e.fat*i*10)/10,minDishes:r*i>=450?3:r*i>=250?2:1}}),minMenuCalories:i,targetMenuCalories:r}}function be(e,t){let{targets:n,minMenuCalories:r,targetMenuCalories:i}=U(e,t);return n.length?[`Нужно покрыть почти весь остаток дня: цель меню ~${R(i,0)} ккал (минимум ${R(r,0)} ккал, не меньше 85% остатка).`,`После меню допустимый остаток: не больше ${R(Math.round(i*.15),0)} ккал.`,`Распределение по пустым приёмам:`,...n.map(e=>{let t=e.minDishes>1?`, минимум ${e.minDishes} блюда`:`, можно 1–2 блюда`;return`• ${e.label}: ~${R(e.targetCalories,0)} ккал (Б ~${R(e.targetProtein)} / У ~${R(e.targetCarbs)} / Ж ~${R(e.targetFat)} г)${t}`}),`Не предлагай «лёгкий» ужин из одного продукта, если осталось много калорий — добавь гарнир, овощи, белок, соус.`].join(`
`):`Дополнительное меню не требуется — все приёмы заполнены.`}function W(e){let t=e.filter(e=>e.filled),n=e.filter(e=>!e.filled);return{filled:t,empty:n,filledBlock:t.length?t.map(e=>{let t=e.items.map(e=>`${e.name} (${R(e.weight,0)} г, ${z(e)})`).join(`; `);return`• ${e.label} — УЖЕ ЗАПОЛНЕН: ${t}`}).join(`
`):`Нет заполненных приёмов.`,emptyBlock:n.length?n.map(e=>`• ${e.label} — пустой, нужно предложить блюда`).join(`
`):`Все приёмы пищи уже заполнены.`}}function xe(e,t){if(!e.length)return`Все приёмы пищи уже заполнены.
Кратко сообщи об этом. Покажи остаток до нормы после уже съеденного.
Не предлагай блюда для завтрака, обеда, ужина или перекуса.`;let{targets:n,minMenuCalories:r}=U(t,e);return`${n.map(e=>{let t=Array.from({length:e.minDishes},(t,n)=>`- ${e.minDishes>1?`Блюдо ${n+1}`:`Блюдо`} — порция, ккал, Б / У / Ж`).join(`
`);return`${e.label} (~${R(e.targetCalories,0)} ккал)\n${t}`}).join(`

`)}

Итого по меню: ... ккал (должно быть не меньше ${R(r,0)} ккал), Б ... / У ... / Ж ...
Останется до нормы: ... ккал, Б ... / У ... / Ж ... (остаток должен быть небольшим)`}function G(e,t,n){if(!e?.calories)return``;let r=[`Целевой баланс БЖУ от дневной нормы: ~25% белки, ~45% углеводы, ~30% жиры.`,`Остаток по макросам: белки ${R(n.protein)} г, углеводы ${R(n.carbs)} г, жиры ${R(n.fat)} г.`],i=[{key:`protein`,label:`белков`},{key:`carbs`,label:`углеводов`},{key:`fat`,label:`жиров`}].map(({key:r,label:i})=>{let a=e[r]||0,o=t[r]||0;return{label:i,share:a>0?o/a:0,remaining:n[r]||0}}).sort((e,t)=>e.share-t.share)[0];return i&&i.share<.5&&i.remaining>0&&r.push(`Сейчас больше всего не хватает ${i.label} — учти это при составлении меню.`),r.push(`Меню должно покрывать почти весь остаток дня (85–100% по ккал и близко по Б/У/Ж), а не быть «лёгкой подсказкой» из 1–2 продуктов.`),r.join(`
`)}async function Se(){let e=f(),[t,n,r,i]=await Promise.all([executeChatTool(`get_diary_summary`,{date:e}),executeChatTool(`get_profile`),executeChatTool(`list_food_entries`,{date:e}),C.foods.toArray()]);return i.sort((e,t)=>e.name.localeCompare(t.name,`ru`,{sensitivity:`base`})),{today:e,diaryToday:t,profile:n,eatenToday:r,foods:i}}function K(e){let{today:t,diaryToday:n,profile:r,eatenToday:i,foods:a}=e,o=n?.consumed??{calories:0,protein:0,carbs:0,fat:0},s=n?.remaining??{calories:0,protein:0,carbs:0,fat:0};return{today:t,diaryToday:n,profile:r,eatenToday:i,foods:a,goals:n?.goals??r?.macroGoals??{calories:r?.dailyCalories??0,protein:0,carbs:0,fat:0},consumed:o,remaining:s}}function q(e){let{today:t,diaryToday:n,profile:r,eatenToday:i,foods:a,goals:o,consumed:s,remaining:c}=K(e),l=`=== ДАТА ===
${t}

=== ДНЕВНАЯ НОРМА ===
${z(o)}
`;return r?.maintenanceCalories&&r.maintenanceCalories!==r.dailyCalories&&(l+=`Поддержание: ${R(r.maintenanceCalories,0)} ккал`,r.calorieGoalLabel&&(l+=` · цель: ${r.calorieGoalLabel}`),l+=`
`),l+=`
=== СЪЕДЕНО СЕГОДНЯ ===
${z(s)}
Записей: ${i?.entries?.length??n?.entriesCount??0}

=== СПИСОК БЛЮД ===
${V(i?.entries)}

=== ПО ПРИЁМАМ ПИЩИ ===
${H(n?.meals)}

=== ОСТАТОК ДО НОРМЫ ===
${z(c)}

=== БАЛАНС БЖУ ===
${G(o,s,c)}

=== КАТАЛОГ БЛЮД (${a.length} шт.) ===
${B(a,80)}
`,r?.weight&&(l+=`
=== ПРОФИЛЬ ===
Вес ${r.weight} кг, рост ${r.height} см, возраст ${r.age}.`),l}async function Ce(){let e=f(),t=v(e,-1),[n,r,i]=await Promise.all([executeChatTool(`get_diary_summary`,{date:t}),executeChatTool(`get_profile`),executeChatTool(`list_food_entries`,{date:t})]);return{today:e,yesterday:t,diaryYesterday:n,profile:r,eatenYesterday:i}}function we(e=f()){return Array.from({length:7},(t,n)=>v(e,n-6))}function Te(e){return m.find(t=>t.value===e)?.label??e??`не указана`}function Ee(e){return e===`male`?`мужской`:e===`female`?`женский`:e??`не указан`}function De(e){let t=e.filter(e=>(e.entriesCount??0)>0),n=t.reduce((e,t)=>{let n=t.consumed??{};return e.calories+=n.calories??0,e.protein+=n.protein??0,e.carbs+=n.carbs??0,e.fat+=n.fat??0,e.entries+=t.entriesCount??0,e},{calories:0,protein:0,carbs:0,fat:0,entries:0}),r=t.length||1;return{loggedDaysCount:t.length,emptyDaysCount:e.length-t.length,totals:n,averages:{calories:n.calories/r,protein:n.protein/r,carbs:n.carbs/r,fat:n.fat/r,entries:n.entries/r}}}function Oe(e,t,n){let r=n?.calories??0;return t.map((t,n)=>{let i=e[n],a=i?.consumed??{calories:0,protein:0,carbs:0,fat:0},o=i?.entriesCount??0,s=_(t);if(!o)return`• ${s} (${t}): нет записей`;let c=r>0?Math.round(a.calories-r):0,l=r>0?c>0?`+${c} ккал к норме`:c<0?`${c} ккал к норме`:`в норме`:``;return`• ${s} (${t}): ${R(a.calories,0)} ккал, Б ${R(a.protein)} / У ${R(a.carbs)} / Ж ${R(a.fat)} г · ${o} записей · ${l}`}).join(`
`)}function ke(e,t=10){if(!e.length)return`За неделю нет записей блюд.`;let n=new Map;for(let t of e){let e=t.name?.trim();if(!e)continue;let r=n.get(e)??{name:e,count:0,calories:0,protein:0,carbs:0,fat:0};r.count+=1,r.calories+=t.calories??0,r.protein+=t.protein??0,r.carbs+=t.carbs??0,r.fat+=t.fat??0,n.set(e,r)}return[...n.values()].sort((e,t)=>t.count-e.count||t.calories-e.calories).slice(0,t).map((e,t)=>`${t+1}. ${e.name} — ${e.count}×, ${R(e.calories,0)} ккал, Б ${R(e.protein)} / У ${R(e.carbs)} / Ж ${R(e.fat)} г`).join(`
`)}function Ae(e,t){if(!e.length)return t?.weight?`Записей веса за неделю нет. Текущий вес в профиле: ${R(t.weight)} кг.`:`Записей веса за неделю нет.`;let n=[...e].sort((e,t)=>e.date.localeCompare(t.date)),r=n[0],i=n[n.length-1],a=i.weight-r.weight,o=Math.abs(a)<.05?`без изменений`:a>0?`+${R(a)} кг`:`${R(a)} кг`,s=n.map(e=>`• ${_(e.date)} (${e.date}): ${R(e.weight)} кг`);return s.push(`Изменение за период: ${o} (${R(r.weight)} → ${R(i.weight)} кг)`),s.join(`
`)}function je(e,t){let n=t?.calories??0;if(!n)return`Дневная норма калорий не задана.`;let r=e.filter(e=>(e.entriesCount??0)>0);if(!r.length)return`Нет данных для оценки попадания в норму.`;let i=n*.1,a=0,o=0,s=0;for(let e of r){let t=(e.consumed?.calories??0)-n;t<-i?a+=1:t>i?s+=1:o+=1}return`Дней с данными: ${r.length}. В пределах ±10% от нормы: ${o}. Ниже нормы: ${a}. Выше нормы: ${s}.`}async function Me(){let e=f(),t=we(e),n=t[0],r=t[t.length-1],[i,...a]=await Promise.all([executeChatTool(`get_profile`),...t.map(e=>executeChatTool(`get_diary_summary`,{date:e}))]),[o,s,c]=await Promise.all([C.foodEntries.where(`date`).between(n,r,!0,!0).toArray(),C.weightLogs.where(`date`).between(n,r,!0,!0).toArray(),C.foods.toArray()]),l=k(o,c);return{today:e,weekStart:n,weekEnd:r,dates:t,profile:i,daySummaries:a,goals:i?.macroGoals??{calories:i?.dailyCalories??0,protein:0,carbs:0,fat:0},weekStats:De(a),entries:l,weightLogs:s}}async function Ne(e){switch(e){case`menu-today`:case`today-analysis`:case`remaining-today`:case`snack-idea`:case`macro-balance`:return Se();case`week-analysis`:return Me();case`yesterday-recap`:return Ce();default:return null}}function Pe(e,t,n,r){return[{role:`system`,content:Ie(e,t,n)},{role:`user`,content:Fe(e,r,t)}]}function Fe(e,t,n=null){if(e.id===`menu-today`){let{empty:e}=W(ye(n?.diaryToday)),r=e.map(e=>e.label.toLowerCase()).join(`, `);if(!e.length)return`${t.trim()}

Все приёмы пищи на сегодня уже заполнены. Сообщи об этом и покажи остаток до нормы. Не предлагай новые блюда.`;let i=n?.diaryToday?.remaining??{},a=Math.round(i.calories??0),o=Math.round(a*.85);return`${t.trim()}

Сразу выдай полноценное сбалансированное меню только для пустых приёмов: ${r}.
Меню должно покрыть почти весь остаток дня: ~${a} ккал (минимум ${o} ккал), с несколькими блюдами в каждом приёме где нужно.
Не включай в меню приёмы, которые уже заполнены в дневнике.
Не задавай уточняющих вопросов. Если блюда из каталога не подходят — предложи свои варианты с КБЖУ.`}if(e.id===`week-analysis`)return`${t.trim()}

Сразу дай понятный анализ питания за последние 7 дней по всем данным выше.
Пиши простым языком, как живой консультант: что получилось, где перекосы, что улучшить.
В конце — конкретные рекомендации на следующую неделю (3–5 пунктов).
Не задавай уточняющих вопросов.`;if(e.id===`today-analysis`)return`${t.trim()}

Дай понятный разбор питания за сегодня: что уже съедено, как по норме, что можно улучшить до конца дня.
Пиши простым языком. В конце — 2–3 коротких совета на оставшийся день.
Не задавай уточняющих вопросов.`;if(e.id===`remaining-today`){let e=n?.diaryToday?.remaining??{};return`${t.trim()}

Сразу покажи остаток калорий и БЖУ на сегодня простыми словами.
Объясни, много это или мало относительно нормы. Предложи 2–3 реалистичных варианта, чем можно воспользоваться из остатка (из каталога или свои).
Остаток сейчас: ~${Math.round(e.calories??0)} ккал.
Не задавай уточняющих вопросов.`}if(e.id===`snack-idea`){let e=n?.diaryToday?.remaining??{};return`${t.trim()}

Предложи 2–3 варианта перекуса на сейчас с порцией и КБЖУ.
Уложись в остаток дня (~${Math.round(e.calories??0)} ккал), перекус обычно 100–250 ккал если остаток позволяет.
Сначала смотри каталог. Не задавай уточняющих вопросов.`}return e.id===`macro-balance`?`${t.trim()}

Объясни простым языком, каких макронутриентов не хватает до нормы на сегодня.
Для каждого дефицита предложи 1–2 конкретных блюда/продукта с порцией и КБЖУ.
Не задавай уточняющих вопросов.`:e.id===`yesterday-recap`?`${t.trim()}

Кратко перескажи, что пользователь ел вчера: итоги по калориям и БЖУ, по приёмам пищи.
Отметь, уложился ли в норму. 2–3 наблюдения простым языком.
Не задавай уточняющих вопросов.`:t.trim()}function Ie(e,t,n=null){return e.id===`menu-today`?Le(t,n):e.id===`week-analysis`?Re(t,n):e.id===`today-analysis`?ze(t,n):e.id===`remaining-today`?Be(t,n):e.id===`snack-idea`?Ve(t,n):e.id===`macro-balance`?He(t,n):e.id===`yesterday-recap`?Ue(t,n):`Ты помощник по учёту калорий. Отвечай на русском.`}function Le(e,t){let{today:n,diaryToday:r,profile:i,eatenToday:a,foods:o}=e,s=r?.consumed??{calories:0,protein:0,carbs:0,fat:0},c=r?.remaining??{calories:0,protein:0,carbs:0,fat:0},l=r?.goals??i?.macroGoals??{calories:i?.dailyCalories??0,protein:0,carbs:0,fat:0},{filled:u,empty:d,filledBlock:f,emptyBlock:p}=W(ye(r)),m=xe(d,c),h=be(c,d),g=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь вызвал команду «Составь меню на сегодня».

=== ДАТА ===
${n}

=== ДНЕВНАЯ НОРМА (калории и БЖУ) ===
Калории: ${R(l.calories,0)} ккал
Белки: ${R(l.protein)} г
Углеводы: ${R(l.carbs)} г
Жиры: ${R(l.fat)} г
`;i?.maintenanceCalories&&i.maintenanceCalories!==i.dailyCalories&&(g+=`Поддержание: ${R(i.maintenanceCalories,0)} ккал`,i.calorieGoalLabel&&(g+=` · цель: ${i.calorieGoalLabel}`),g+=`
`),g+=`
=== УЖЕ СЪЕДЕНО СЕГОДНЯ (итого) ===
${z(s)}
Записей в дневнике: ${a?.entries?.length??r?.entriesCount??0}

=== УЖЕ СЪЕДЕНО СЕГОДНЯ (полный список) ===
${V(a?.entries)}

=== ПО ПРИЁМАМ ПИЩИ ===
${H(r?.meals)}

=== СТАТУС ПРИЁМОВ (главное правило) ===
Заполнены — НЕ включать в меню, НЕ предлагать блюда:
${f}

Пустые — предложить блюда только для них:
${p}

=== ОСТАТОК ДО НОРМЫ (нужно почти полностью покрыть меню) ===
${z(c)}

=== БЮДЖЕТ МЕНЮ (обязательно) ===
${h}

=== БАЛАНС БЖУ ===
${G(l,s,c)}

=== КАТАЛОГ БЛЮД ПОЛЬЗОВАТЕЛЯ (${o.length} шт.) ===
Сначала смотри каталог. Если блюда не подходят по балансу, калориям или разнообразию — предложи свои варианты с оценкой КБЖУ.
${B(o)}
`,i?.weight&&(g+=`
=== ПРОФИЛЬ ===
Вес ${i.weight} кг, рост ${i.height} см, возраст ${i.age}.`),g+=I(t);let _=d.map(e=>e.label).join(`, `)||`нет`,v=u.map(e=>e.label).join(`, `);g+=`

=== ЗАДАЧА ===
1. Составь меню ТОЛЬКО для пустых приёмов: ${_}.`,u.length&&(g+=`
2. Приёмы «${v}» уже заполнены — полностью исключи их из ответа.
3. Не предлагай дополнительные блюда к уже заполненным приёмам.`);let{minMenuCalories:y,targetMenuCalories:b}=U(c,d);return g+=`
4. Учти всё, что уже съедено сегодня (списки выше).
5. Меню должно покрыть 85–100% остатка: цель ~${R(b,0)} ккал, минимум ${R(y,0)} ккал. Не предлагай «облегчённый» вариант на 100–200 ккал, если осталось ${R(c.calories,0)} ккал.
6. Распредели калории по пустым приёмам согласно блоку «БЮДЖЕТ МЕНЮ». В крупных приёмах — несколько блюд (гарнир, белок, овощи).
7. Не превышай остаток по калориям и стремись близко к остатку по БЖУ (после меню должно остаться не больше ~15% текущего остатка).
8. Меню должно быть сбалансированным и разнообразным, не из одного продукта.
9. Используй каталог, но можешь предлагать свои блюда, если так меню получится лучше.
10. Для каждого блюда: название, порция (г), ккал, Б/У/Ж.
11. В конце — итого по меню и остаток до нормы после меню. Проверь: итого меню ≥ ${R(y,0)} ккал.

КРИТИЧНО: сразу выдай готовое меню. Без уточняющих вопросов.
КРИТИЧНО: если приём пищи уже заполнен в дневнике — не выводи для него раздел и не предлагай блюда.
КРИТИЧНО: меню должно быть полноценным и закрывать дневную норму, а не минимальным набором продуктов.

Формат ответа:
${m}

Ответь обычным текстом на русском. Не возвращай JSON.`,g}function Re(e,t){let{today:n,weekStart:r,weekEnd:i,dates:a,profile:o,daySummaries:s,goals:c,weekStats:l,entries:u,weightLogs:d}=e;if(o?.error)return`Профиль пользователя не заполнен. Попроси заполнить профиль в настройках и повторить анализ.`;let f=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь вызвал команду «Анализ питания за неделю».

=== ПЕРИОД ===
С ${r} по ${i} (7 дней, включая сегодня ${n})

=== ДНЕВНАЯ НОРМА ПОЛЬЗОВАТЕЛЯ ===
Калории: ${R(c.calories,0)} ккал
Белки: ${R(c.protein)} г
Углеводы: ${R(c.carbs)} г
Жиры: ${R(c.fat)} г
`;return o?.maintenanceCalories&&o.maintenanceCalories!==o.dailyCalories&&(f+=`Поддержание: ${R(o.maintenanceCalories,0)} ккал`,o.calorieGoalLabel&&(f+=` · цель: ${o.calorieGoalLabel}`),f+=`
`),f+=`
=== ПРОФИЛЬ ===
Вес ${R(o.weight)} кг, рост ${R(o.height)} см, возраст ${o.age}.
Пол: ${Ee(o.gender)}. Активность: ${Te(o.activityLevel)}.

=== СВОДКА ЗА НЕДЕЛЮ ===
Дней с записями: ${l.loggedDaysCount} из 7
Дней без записей: ${l.emptyDaysCount}
Всего записей в дневнике: ${R(l.totals.entries,0)}

Итого за неделю (только дни с записями):
${z(l.totals)}

Среднее в день (по дням с записями):
${z(l.averages)}

Попадание в калорийную норму:
${je(s,c)}

=== ПО ДНЯМ ===
${Oe(s,a,c)}

=== ЧАСТЫЕ БЛЮДА ЗА НЕДЕЛЮ ===
${ke(u)}

=== ВЕС ЗА НЕДЕЛЮ ===
${Ae(d,o)}
`,f+=I(t),f+=`

=== ЗАДАЧА ===
1. Дай цельный анализ недели простым человеческим языком — без канцелярита и без JSON.
2. Опирайся только на данные выше. Если данных мало — честно скажи, но всё равно дай полезные выводы.
3. Разбери: калории, БЖУ, стабильность питания, пропущенные дни, перекосы, повторяющиеся блюда, динамику веса (если есть).
4. Отметь, что получилось хорошо — не только критику.
5. Объясни отклонения от нормы понятно: «в среднем недобор», «частые переборы в выходные» и т.п.
6. В конце дай блок «Рекомендации» — 3–5 конкретных, выполнимых советов на следующую неделю.
7. Не назначай лекарства и не ставь диагнозы. Это рекомендации по питанию, не медицинская консультация.

КРИТИЧНО: сразу выдай готовый анализ. Без уточняющих вопросов.

Формат ответа:
**Краткий итог**
2–3 предложения главного вывода.

**Как прошла неделя**
Понятный разбор по калориям, БЖУ и регулярности записей.

**Что хорошо**
• ...

**На что обратить внимание**
• ...

**Рекомендации**
1. ...
2. ...
3. ...

Ответь обычным текстом на русском. Можно использовать markdown для заголовков и списков. Не возвращай JSON.`,f}function ze(e,t){if(e?.profile?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let n=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь вызвал команду «Анализ питания за сегодня».

${q(e)}`;return n+=I(t),n+=`

=== ЗАДАЧА ===
1. Дай разбор дня простым языком: калории, БЖУ, распределение по приёмам.
2. Сравни съеденное с нормой — понятно, без сухих таблиц.
3. Отметь сильные стороны и слабые места.
4. Дай 2–3 совета на оставшийся день (если день ещё не закрыт по калориям).

КРИТИЧНО: сразу выдай анализ. Без уточняющих вопросов.

Формат:
**Итог дня**
**По калориям и БЖУ**
**Что хорошо** · **Что улучшить**
**Советы до конца дня**

Ответь текстом на русском. Можно markdown. Не JSON.`,n}function Be(e,t){if(e?.profile?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let{remaining:n,goals:r}=K(e),i=r.calories>0?n.calories/r.calories:0,a=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь спрашивает, сколько осталось на сегодня.

${q(e)}`;return a+=I(t),a+=`

=== ПОДСКАЗКА ===
Осталось ~${Math.round((i||0)*100)}% дневной нормы по калориям.

=== ЗАДАЧА ===
1. Чётко назови остаток: ккал и Б/У/Ж.
2. Объясни простыми словами, много это или мало (можно ли ещё полноценно поесть).
3. Предложи 2–3 реалистичных варианта из остатка — блюда с порцией и КБЖУ.
4. Если остаток отрицательный или почти ноль — скажи честно и без морали.

КРИТИЧНО: сразу ответь. Без вопросов.

Формат:
**Осталось на сегодня**
**Что это значит**
**Можно съесть**
- вариант 1 ...
- вариант 2 ...

Не JSON.`,a}function Ve(e,t){if(e?.profile?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let{remaining:n}=K(e),r=Math.min(Math.max(n.calories,0),300),i=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь просит идею перекуса.

${q(e)}`;return i+=I(t),i+=`

=== БЮДЖЕТ ПЕРЕКУСА ===
Ориентир: до ${R(r,0)} ккал (не больше 30% оставшихся калорий и не больше 300 ккал).

=== ЗАДАЧА ===
1. Предложи 2–3 варианта перекуса с порцией и КБЖУ.
2. Учти остаток по БЖУ — если не хватает белка, предложи белковый перекус.
3. Сначала каталог, потом свои идеи.
4. Коротко объясни, почему подходит.

КРИТИЧНО: сразу выдай варианты. Без вопросов.

Формат:
**Перекус 1** — порция, ккал, Б/У/Ж, почему подходит
**Перекус 2** — ...
**Перекус 3** — ... (если уместно)

Не JSON.`,i}function He(e,t){if(e?.profile?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let{goals:n,consumed:r,remaining:i}=K(e),a=[{label:`белки`,key:`protein`},{label:`углеводы`,key:`carbs`},{label:`жиры`,key:`fat`}].map(({label:e,key:t})=>({label:e,remaining:i[t]??0,goal:n[t]??0,consumed:r[t]??0})).sort((e,t)=>t.remaining-e.remaining).map(e=>`• ${e.label}: осталось ${R(e.remaining)} г (съедено ${R(e.consumed)} из ${R(e.goal)} г)`).join(`
`),o=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь спрашивает, как добрать БЖУ до нормы.

${q(e)}

=== ДЕФИЦИТЫ / ОСТАТКИ ПО МАКРОСАМ ===
${a}
`;return o+=I(t),o+=`

=== ЗАДАЧА ===
1. Простым языком объясни, чего не хватает (белки, углеводы, жиры).
2. Для каждого значимого дефицита — 1–2 конкретных блюда с порцией и КБЖУ.
3. Если по какому-то макросу перебор — скажи об этом и не предлагай его добирать.
4. Уложись в оставшиеся калории.

КРИТИЧНО: сразу ответь. Без вопросов.

Формат:
**Главное**
**Белки** — что добавить
**Углеводы** — что добавить
**Жиры** — что добавить
**Итого** — краткий план

Не JSON.`,o}function Ue(e,t){let{yesterday:n,diaryYesterday:r,profile:i,eatenYesterday:a}=e;if(i?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let o=r?.consumed??{calories:0,protein:0,carbs:0,fat:0},s=r?.remaining??{calories:0,protein:0,carbs:0,fat:0},c=r?.goals??i?.macroGoals??{calories:i?.dailyCalories??0,protein:0,carbs:0,fat:0},l=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь спрашивает, что он ел вчера.

=== ДАТА ===
${n} (${_(n)})

=== НОРМА ===
${z(c)}

=== ИТОГО ЗА ВЧЕРА ===
${z(o)}
Остаток к норме: ${z(s)}
Записей: ${a?.entries?.length??r?.entriesCount??0}

=== СПИСОК БЛЮД ===
${V(a?.entries)}

=== ПО ПРИЁМАМ ===
${H(r?.meals)}
`;return l+=I(t),l+=`

=== ЗАДАЧА ===
1. Кратко перескажи вчерашний день: что ел, сколько калорий и БЖУ.
2. Уложился ли в норму — простыми словами.
3. 2–3 наблюдения (без морали, дружелюбно).
4. Если записей не было — скажи об этом.

КРИТИЧНО: сразу ответь. Без вопросов.

Формат:
**Вчера в цифрах**
**По приёмам пищи**
**Наблюдения**

Не JSON.`,l}var We=/^(?:рекомендац|итого|общ|dinner|lunch|breakfast|snack|ужин|обед|завтрак|перекус)$/i;function Ge(e){if(!e?.name)return!1;let t=String(e.name).trim();return!(t.length<3||We.test(t)||Number(e.calories)<20)}function J(e){return(e??[]).filter(Ge)}function Ke(e){return e.replace(/```(?:json)?\s*/gi,``).replace(/```/g,``).trim()}function qe(e){return!e||typeof e!=`object`?e:{name:e.name??e.название??e.блюдо??e.dish,calories:e.calories??e.calories_kcal??e.калории??e.ккал??e.kcal,protein:e.protein??e.белки??e.белок,carbs:e.carbs??e.carbohydrates??e.углеводы??e.углевод,fat:e.fat??e.fats??e.жиры??e.жир,portionWeight:e.portionWeight??e.weight??e.вес??e.portion_weight,text:e.text??e.ответ??e.message??e.description}}function Je(e){let t=qe(e);if(!t||typeof t!=`object`)return null;let n=String(t.name??``).trim(),r=Number(t.calories),i=Number(t.protein),a=Number(t.carbs),o=Number(t.fat);if(!n||Number.isNaN(r))return null;let s={name:n,...O({calories:r,protein:Number.isNaN(i)?0:i,carbs:Number.isNaN(a)?0:a,fat:Number.isNaN(o)?0:o,portionWeight:t.portionWeight})};return Ge(s)?s:null}function Ye(e){let t=[],n=Ke(e);for(let e=0;e<n.length;e++){if(n[e]!==`{`)continue;let r=0;for(let i=e;i<n.length;i++)if(n[i]===`{`&&r++,n[i]===`}`&&r--,r===0){t.push(n.slice(e,i+1));break}}return t}function Y(e){try{let t=JSON.parse(e);if(Array.isArray(t.items)&&t.items.length){let e=J(t.items.map(e=>Je(e)).filter(Boolean));if(e.length)return{text:String(t.text??``).trim(),proposals:e.map(e=>({...e,status:`pending`}))}}let n=Je(t);if(n)return{text:typeof t.text==`string`?t.text:typeof t.ответ==`string`?t.ответ:``,proposal:n};if(t&&typeof t==`object`&&(t.text||t.ответ))return{text:t.text??t.ответ??``,proposal:null}}catch{}return null}var Xe=/составь\s+меню|подбери\s+меню|меню\s+на\s+(?:сегодня|день)/i,Ze=/анализ.*недел|итог.*недел|разбор.*недел|оцен.*недел|как\s+(?:я\s+)?питался.*недел/i;function Qe(e){return Xe.test((e??``).trim())}function $e(e){return Ze.test((e??``).trim())}var et=/(?:добав|запиш|внес|сохран|подтверд|занес).*(?:меню|дневник|рацион|план)|(?:в|ко)\s+меню|в\s+дневник|на\s+сегодня.*(?:добав|запиш)/i,tt=/^(?:добавь|добавьте|запиши|запишите|внеси|сохрани|подтверди|занеси)(?:[.!?\s]|$)/i;function nt(e){let t=(e??``).trim();return t?tt.test(t)?!0:et.test(t):!1}function rt(e){let t=(e??``).trim();return t?nt(t)?!0:/(\d+)\s*(?:г|гр|грамм)(?:\b|[\s,.+]|$)/i.test(t)&&/[а-яё]/i.test(t):!1}var it=/^(?:да|давай|добавь|добавьте|ок|окей|хорошо|согласен|сохрани|запиши|подтверди|вноси|занеси|уложи|норм|нормально)(?:[!?.,\s]|$)/i,at=/(?:рассчит|посчит|оцени|вычисл).*(?:калор|бжу|кбжу|белк|макро)|(?:калор|бжу|кбжу).*(?:рассчит|посчит|оцени|сам)/i,ot=/(?:раздели|разбей|подели|распредели).*(?:на|по)|(?:отдельно|по\s+отдельности|частями)/i;function st(e){return(e??[]).slice(-8).some(e=>{if(e.nutritionProposals?.length||e.nutritionProposal)return!0;let t=e.content??``;return/(\d+)\s*(?:ккал|kcal)/i.test(t)&&/(?:белк|углевод|жир)/i.test(t)})}function ct(e,{messages:t=[]}={}){let n=(e??``).trim();return!n||Qe(n)||$e(n)||_e(n)?!1:!!(nt(n)||rt(n)||it.test(n)&&st(t)||ot.test(n)&&st(t)||at.test(n)&&(t??[]).filter(e=>e.role===`user`).slice(-3).some(e=>/(\d+)\s*(?:г|гр|грамм)/i.test(e.content??``)||/(?:рис|мяс|куриц|суп|салат|гуляш|каша|яйц|рыб|творог|овсян)/i.test(e.content??``)))}function lt({imageData:e}){return!!e}function ut(e){if(!e)return{text:``,proposal:null,proposals:[]};let t=Ye(e);for(let n=t.length-1;n>=0;n--){let r=Y(t[n]);if(r?.proposals?.length)return{text:r.text||`Предлагаю добавить в дневник:`,proposal:r.proposals[0],proposals:r.proposals};if(r?.proposal)return{text:r.text||e.replace(t[n],``).trim()||`Оценка блюда`,proposal:r.proposal}}let n=Y(Ke(e));return n?.proposals?.length?{text:n.text||`Предлагаю добавить в дневник:`,proposal:n.proposals[0],proposals:n.proposals}:n?.proposal?{text:n.text||`Оценка блюда`,proposal:n.proposal}:{text:e.trim(),proposal:null,proposals:[]}}function X(e){let t=me(e);if(t?.proposals?.length)return{text:t.text,proposals:J(t.proposals)};let n=N(e);if(n?.proposals?.length)return{text:n.text,proposals:J(n.proposals)};let r=Ye(e);for(let e=r.length-1;e>=0;e--){let t=Y(r[e]);if(t?.proposals?.length)return{text:t.text||`Предлагаю добавить в дневник:`,proposals:t.proposals}}let i=ut(e);return i.proposals?.length?{text:i.text,proposals:i.proposals}:i.proposal?{text:i.text,proposals:[{...i.proposal,status:`pending`}]}:{text:e?.trim()??``,proposals:[]}}function dt(){let e=f(),t=v(e,-1);return[{type:`function`,function:{name:`get_profile`,description:`Профиль пользователя и дневные цели по калориям и БЖУ. Вызывай при вопросах о норме, целях, параметрах тела.`,parameters:{type:`object`,properties:{},additionalProperties:!1}}},{type:`function`,function:{name:`get_diary_summary`,description:`Сводка питания за день: съедено ккал и БЖУ, остаток до нормы, блюда по приёмам пищи.
Справочник дат: сегодня=${e}, вчера=${t}, позавчера=${v(e,-2)}.
Вызывай когда спрашивают сколько съел, итог за день, остаток калорий, БЖУ за период.`,parameters:{type:`object`,properties:{date:{type:`string`,description:`Дата YYYY-MM-DD. Сегодня: ${e}, вчера: ${t}.`}},additionalProperties:!1}}},{type:`function`,function:{name:`list_food_entries`,description:`Список записей дневника за день. Справочник дат: сегодня=${e}, вчера=${t}.
Вызывай когда спрашивают что ел, список блюд, детали по приёму пищи.`,parameters:{type:`object`,properties:{date:{type:`string`,description:`YYYY-MM-DD. Сегодня: ${e}, вчера: ${t}.`},mealType:{type:`string`,enum:[`breakfast`,`lunch`,`dinner`,`snack`],description:`breakfast=завтрак, lunch=обед, dinner=ужин, snack=перекус`}},additionalProperties:!1}}},{type:`function`,function:{name:`search_foods`,description:`Поиск блюд в сохранённом каталоге по названию`,parameters:{type:`object`,properties:{query:{type:`string`,description:`Часть названия блюда`},limit:{type:`number`,description:`Макс. результатов, по умолчанию 10`}},required:[`query`],additionalProperties:!1}}}]}async function Z(e,t={}){switch(e){case`get_profile`:return ft();case`get_diary_summary`:return pt(t.date);case`list_food_entries`:return mt(t);case`search_foods`:return ht(t);default:return{error:`Неизвестный инструмент: ${e}`}}}async function ft(){let e=await C.profile.get(1);if(!e)return{error:`Профиль не заполнен`};let t=x(e.dailyCalories);return{weight:e.weight,height:e.height,age:e.age,gender:e.gender,activityLevel:e.activityLevel,calorieGoal:e.calorieGoal??`maintain`,calorieGoalLabel:S(e.calorieGoal),maintenanceCalories:g(e),dailyCalories:e.dailyCalories,macroGoals:t}}async function pt(e){let t=e||f(),n=await j(t,C),r=ee(n),i=await C.profile.get(1),a=x(i?.dailyCalories??0),o={};for(let e of n){let t=A(e.mealType);o[t]||(o[t]=[]),o[t].push({name:e.name,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,weight:e.weight,isOrphan:e.isOrphan})}return{date:t,consumed:r,remaining:{calories:(i?.dailyCalories??0)-r.calories,protein:a.protein-r.protein,carbs:a.carbs-r.carbs,fat:a.fat-r.fat},goals:{calories:i?.dailyCalories??null,...a},meals:o,entriesCount:n.length}}async function mt({date:e,mealType:t}){let n=e||f(),r=await j(n,C);return t&&(r=r.filter(e=>e.mealType===t)),{date:n,mealType:t??null,entries:r.map(e=>({name:e.name,meal:A(e.mealType),calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,weight:e.weight,isOrphan:e.isOrphan}))}}async function ht({query:e,limit:t=10}){let n=(e??``).trim().toLowerCase();return n?{foods:(await C.foods.toArray()).filter(e=>e.name.toLowerCase().includes(n)).slice(0,Math.min(t,20)).map(e=>({name:e.name,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,portionWeight:e.portionWeight}))}:{foods:[]}}var gt=`
Пользователь хочет ЗАПИСАТЬ блюда в дневник — в приложении появятся кнопки «Подтвердить».
Сначала попробуй найти блюда в каталоге через search_foods.
Если точных данных нет — сразу оцени калории и БЖУ сам по стандартным значениям.
Если совсем не можешь оценить — коротко объясни почему, чего не хватает.
Если пользователь подтверждает ранее обсуждённые блюда — возьми цифры из истории чата.
Если пользователь просит "добавь", "добавь эти блюда", "сохрани", "занеси", "подтверди" — это команда на запись последних обсуждённых блюд.
Если пользователь просит разделить блюдо (на 2 блюда/порции, отдельно макароны и курицу) — верни разделённые позиции в items, не просто текст.
Каждое блюдо — отдельный элемент items. Не объединяй несколько блюд в один item.
Если известны блюда и их макросы, items не должен быть пустым.
Возвращай items: [] только когда реально нет данных о блюдах даже в истории.
Ответь ТОЛЬКО JSON:
{"text":"краткий ответ","items":[{"name":"...","calories":250,"protein":3,"carbs":56,"fat":0,"portionWeight":200,"mealType":"dinner"}]}
text — 1–2 предложения. Детали только в items.`,_t=`
Пользователь описал еду для дневника.
Если в каталоге нет точных совпадений — оцени калории и БЖУ сам.
Не проси дополнительные уточнения, если можно дать разумную оценку.
Если не хватает информации даже для приблизительной оценки — объясни причину.
Если в текущем запросе или истории уже есть блюда/макросы — верни заполненный items, не items: [].
Команды "добавь/сохрани/занеси/подтверди" трактуй как добавление последних обсуждённых блюд.
Команды "раздели/разбей/отдельно" трактуй как формирование нескольких items.
Верни ТОЛЬКО JSON с items (каждое блюдо отдельно).
{"text":"краткий ответ","items":[{"name":"...","calories":250,"protein":3,"carbs":56,"fat":0,"portionWeight":200,"mealType":"dinner"}]}`,vt=`
Если пользователь пишет "добавь", "добавь эти блюда", "они не добавлены", "те что выше" — это ссылка на последние блюда из истории.
Если в истории есть калории/БЖУ по блюдам, восстанови блюда из этой истории и верни непустой items.`;function yt({chatContext:e,profile:t,diaryToday:n}){let r=y(),i=t??r.profile,a=f(),o=v(a,-1),s=`Ты помощник по учёту калорий. Помогай пользователю следить за питанием.`;return i&&(s=`Ты помощник по учёту калорий. Профиль: вес ${i.weight} кг, рост ${i.height} см, норма ${i.dailyCalories} ккал/день.`),s+=I(e),s+=`
Сегодня: ${a}, вчера: ${o}.`,n?.consumed&&(s+=`
Уже съедено сегодня: ${Math.round(n.consumed.calories)} ккал (Б ${Math.round(n.consumed.protein)} / У ${Math.round(n.consumed.carbs)} / Ж ${Math.round(n.consumed.fat)} г).`),s+=gt,s}var bt=`
Пользователь прислал фото еды. Оцени калории и БЖУ по схеме nutrition_proposal.`;function xt(e){let t=e.replace(/\s+/g,` `).trim();return t?t.length>40?`${t.slice(0,40)}…`:t:`Новый чат`}async function St({providerId:e,baseURL:t,token:n,messages:r,model:i}){let a=T(e)?[{jsonMode:!0},{jsonMode:!1}]:[{responseFormat:P},{responseFormat:M},{jsonMode:!0}],o=null;for(let s of a)try{return await E({providerId:e,baseURL:t,token:n,messages:r,model:i,...s})}catch(e){o=e}throw o??Error(`Не удалось получить ответ`)}async function Ct({providerId:e,baseURL:t,token:n,messages:r,model:i}){let a=r.filter(e=>e.role!==`system`),o=e=>typeof e==`string`?e:Array.isArray(e)?e.filter(e=>e?.type===`text`&&typeof e.text==`string`).map(e=>e.text).join(` `):``,s=e=>/(\d+)\s*(?:ккал|kcal)/i.test(e)&&/(?:белк|углевод|жир|бжу)/i.test(e),c=a.slice(-10).map(e=>({role:e.role,content:o(e.content).trim()})).filter(e=>e.content&&s(e.content)).slice(-3).map(e=>`${e.role}: ${e.content.slice(0,500)}`).join(`
`),l;try{l=await oe({providerId:e,baseURL:t,token:n,messages:r,model:i,tools:dt(),executeTool:Z,maxRounds:4})}catch{l=await St({providerId:e,baseURL:t,token:n,messages:r,model:i})}if(J(X(l.content).proposals).length)return l;let u=[{role:`system`,content:_t},...a];try{l=await E({providerId:e,baseURL:t,token:n,messages:u,model:i,jsonMode:!0})}catch{try{l=await E({providerId:e,baseURL:t,token:n,messages:u,model:i,jsonMode:!1})}catch{return l}}if(J(X(l.content).proposals).length||!c)return l;let d=[{role:`system`,content:`${_t}
${vt}
Опирайся на этот контекст:
${c}
Верни JSON по схеме meal_proposals с непустым items.`},...a];try{l=await E({providerId:e,baseURL:t,token:n,messages:d,model:i,responseFormat:P})}catch{try{l=await E({providerId:e,baseURL:t,token:n,messages:d,model:i,jsonMode:!0})}catch{}}return l}function wt({response:e,wantsLogFood:t,hasImage:n}){if(e.usedTools&&!t)return{displayContent:e.content.trim(),proposals:[]};if(t||n){let t=X(e.content);return{displayContent:t.text||e.content.trim(),proposals:J(t.proposals)}}let r=N(e.content);if(r)return{displayContent:r.text,proposals:J(r.proposals)};let i=ut(e.content),a=i.proposals?.length?J(i.proposals):i.proposal?J([{...i.proposal,status:`pending`}]):[];return{displayContent:i.text,proposals:a}}function Q(e){if(!e)return null;let t={name:String(e.name??``),...O({calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,portionWeight:e.portionWeight??e.weight})};return e.suggestedMealType&&(t.suggestedMealType=e.suggestedMealType),e.status&&(t.status=e.status),t}function $(e){return(e??[]).map(Q).filter(Boolean)}function Tt(e){let t={...e};return t.nutritionProposals?(t.nutritionProposals=$(t.nutritionProposals),t.nutritionProposal=t.nutritionProposals[0]??void 0):t.nutritionProposal&&=Q(t.nutritionProposal),t}var Et=te(`chat`,()=>{let e=d([]),t=d(null),n=d([]),r=d(!1),i=d(null),a=d(null);function o(){t.value&&localStorage.setItem(p,String(t.value))}async function s(){e.value=await C.chats.orderBy(`updatedAt`).reverse().toArray()}async function c(e=t.value){if(!e){n.value=[];return}n.value=await C.chatMessages.where(`chatId`).equals(e).sortBy(`createdAt`)}async function l(e){return await C.chatMessages.where(`chatId`).equals(e).count()===0}async function u(){await s();let t=e.value[0];return t&&await l(t.id)?(await g(t.id),t.id):h()}async function m(){if(await s(),!e.value.length){await h(`Чат 1`);return}let n=Number(localStorage.getItem(p)),r=e.value.some(e=>e.id===n)?n:e.value[0].id;t.value=r,o(),await c(r)}async function h(e=`Новый чат`){let t=Date.now(),n=await C.chats.add({title:e,createdAt:t,updatedAt:t});return await s(),await g(n),n}async function g(e){t.value=e,o(),i.value=null,await c(e)}async function _(r){if(await C.chatMessages.where(`chatId`).equals(r).delete(),await C.chats.delete(r),await s(),t.value===r){if(e.value.length){await g(e.value[0].id);return}t.value=null,n.value=[],localStorage.removeItem(p),await h(`Чат 1`)}}async function b(e,t={}){let n=Date.now();await C.chats.update(e,{updatedAt:n,...t}),await s()}async function x(){await m()}function ee({hasImage:e=!1,chatContext:t=null}={}){let n=y().profile,r=f(),i=v(r,-1),a=`Ты помощник по учёту калорий. Помогай пользователю следить за питанием.`;return n&&(a=`Ты помощник по учёту калорий. Профиль пользователя: вес ${n.weight} кг, рост ${n.height} см, возраст ${n.age}, пол ${n.gender===`male`?`мужской`:`женский`}. Дневная норма калорий: ${n.dailyCalories} ккал.`),e?a+=bt:(a+=I(t),a+=`
У тебя есть инструменты для чтения дневника и каталога блюд в приложении.
Сегодня: ${r}, вчера: ${i}.
Сам реши, нужен ли инструмент и с какими параметрами (дата, приём пищи).
Учитывай историю сообщений и контекст чата в уточняющих вопросах.
Если вопрос о съеденном, калориях, БЖУ, дневнике, норме — вызови get_diary_summary, list_food_entries, get_profile или search_foods.
Не выдумывай цифры о дневнике — только данные из инструментов.
Если инструменты не нужны и пользователь описывает новое блюдо — ответь JSON с полями text, name, calories, protein, carbs, fat, portionWeight.
Для вопросов о дневнике — обычным текстом, без JSON.`),a}function S(){let e=ne(),t=le(),n=t.activeProvider,r=se(n),i=ue(n,e.getToken(n));if(!i&&fe(n))throw Error(`Укажите API-ключ для ${r.name} в настройках`);if(n===`lmstudio`){let e=ie();if(e)throw Error(e);if(!t.activeModel)throw Error(`Выберите модель LM Studio в настройках`)}return{providerId:n,token:i,baseURL:ce(n,{lmstudioBaseURL:t.lmstudioBaseURL}),provider:r}}function te(e,t){if(!t)return e||` `;let n=[];return e?n.push({type:`text`,text:e}):n.push({type:`text`,text:`Оцени калории и состав блюда на фото. Ответь кратко на русском.`}),n.push({type:`image_url`,image_url:{url:t}}),n}function w(){return ge(n.value.map(e=>e.imageData?{role:e.role,content:te(e.content,e.imageData)}:{role:e.role,content:e.content}))}async function T(e){return(await C.chats.get(e))?.context??null}async function D(t,n){await C.chats.update(t,{context:n});let r=e.value.find(e=>e.id===t);r&&(r.context=n)}function O(e){for(let t=e-1;t>=0;t--){let e=n.value[t];if(e.role===`user`)return e.imageData??null}return null}async function k(e,t){let r=Tt(t);await C.chatMessages.update(e,r);let i=n.value.findIndex(t=>t.id===e);i!==-1&&(n.value[i]={...n.value[i],...r})}function A(e,t){return e?{usageCostRub:e.costRub??0,usageTotalTokens:e.totalTokens??0,usageKind:t}:{}}async function j({providerId:e,model:t,kind:n,usage:r}){r&&await de().logUsage({providerId:e,model:t,kind:n,usage:r})}async function N({text:e=``,imageData:o=null}={}){let s=e.trim();if(!s&&!o)return;t.value||await h();let c=t.value,l,u,d;try{({providerId:l,token:u,baseURL:d}=S())}catch(e){throw i.value=e.message,e}let p=le(),m=lt({imageData:o}),g=m?null:_e(s),_=!g&&!m&&(ct(s,{messages:n.value})||rt(s)),v=s||(o?`Оцени калории на фото`:``);n.value.length===0&&s&&await b(c,{title:xt(s)});let y=a.value;a.value=null;let x={chatId:c,role:`user`,content:v,imageData:o??void 0,providerId:l,createdAt:Date.now(),...A(y,`transcribe`)};x.id=await C.chatMessages.add(x),n.value.push(x),await b(c),r.value=!0,i.value=null;try{let e=await T(c),t=n.value.slice(0,-1),r;r=g?Pe(g,await Ne(g.id),e,s):_?[{role:`system`,content:yt({chatContext:e,diaryToday:await Z(`get_diary_summary`,{date:f()})})},...w()]:[{role:`system`,content:ee({hasImage:m,chatContext:e})},...w()];let i;if(m)try{i=await E({providerId:l,baseURL:d,token:u,messages:r,model:p.activeModel,responseFormat:M})}catch{try{i=await E({providerId:l,baseURL:d,token:u,messages:r,model:p.activeModel,jsonMode:!0})}catch{i=await E({providerId:l,baseURL:d,token:u,messages:r,model:p.activeModel,jsonMode:!1})}}else if(g)i=await E({providerId:l,baseURL:d,token:u,messages:r,model:p.activeModel,jsonMode:!1});else if(_)i=await Ct({providerId:l,baseURL:d,token:u,messages:r,model:p.activeModel});else if(ae(l,s,{hasImage:m,messages:t}))try{i=await oe({providerId:l,baseURL:d,token:u,messages:r,model:p.activeModel,tools:dt(),executeTool:Z})}catch(e){if(i=await E({providerId:l,baseURL:d,token:u,messages:r,model:p.activeModel,jsonMode:!1}),!i.content)throw e}else i=await E({providerId:l,baseURL:d,token:u,messages:r,model:p.activeModel,jsonMode:!1});let{displayContent:a,proposals:o}=wt({response:i,wantsLogFood:_,hasImage:m}),h={chatId:c,role:`assistant`,content:a||i.content,nutritionProposals:o.length?$(o):void 0,nutritionProposal:o[0]?Q(o[0]):void 0,nutritionStatus:o.length?`pending`:void 0,providerId:l,createdAt:Date.now(),...A(i.usage,`chat`)};h.id=await C.chatMessages.add(h),n.value.push(h),await D(c,he(e,{toolInvocations:i.toolInvocations??[],userText:s})),await b(c),await j({providerId:l,model:i.model,kind:`chat`,usage:i.usage})}catch(e){throw i.value=e.message,e}finally{r.value=!1}}async function P(e){let{providerId:t,token:n,baseURL:r}=S(),i=await re({providerId:t,baseURL:r,token:n,audioBlob:e});return a.value=i.usage??null,await j({providerId:t,model:`whisper-1`,kind:`transcribe`,usage:i.usage}),i.text}async function F(e,t,r,i=0){let a=n.value.findIndex(t=>t.id===e);if(a===-1)return;let o=n.value[a],s=o.nutritionProposals?.length?$(o.nutritionProposals):o.nutritionProposal?[Q({...o.nutritionProposal,status:o.nutritionStatus??`pending`})]:[],c=s[i];if(!c||c.status===`confirmed`)return;let l=pe(),u=O(a),d=t||c.suggestedMealType||`lunch`;await l.addFromProposal(c,d,r,u),s[i]=Q({...c,status:`confirmed`}),await k(e,{nutritionProposals:s,nutritionStatus:s.every(e=>e.status===`confirmed`)?`confirmed`:`pending`})}async function me(e){await k(e,{nutritionStatus:`dismissed`})}return{chats:e,activeChatId:t,messages:n,loading:r,error:i,loadChats:s,loadHistory:x,openChatSession:u,createChat:h,selectChat:g,deleteChat:_,send:N,transcribe:P,confirmNutrition:F,dismissNutrition:me,updateMessage:k}}),Dt={class:`bottom-nav`,"aria-label":`Основная навигация`},Ot={class:`bottom-nav__surface`},kt={class:`bottom-nav__row`},At={class:`bottom-nav__icon-wrap`},jt={class:`bottom-nav__icon-wrap`},Mt={class:`bottom-nav__icon-wrap`},Nt={class:`bottom-nav__icon-wrap`},Pt=w({__name:`BottomNav`,setup(o){let s=l(),u=e(),d=Et();function f(e){return e===`/`?s.path===`/`:e===`/settings`?s.path.startsWith(`/settings`):s.path===e}async function p(){await d.openChatSession(),s.path!==`/chat`&&await u.push(`/chat`)}return(e,o)=>{let s=n(`AppIcon`),l=n(`router-link`);return r(),t(`nav`,Dt,[a(`div`,Ot,[o[1]||=a(`svg`,{class:`bottom-nav__shape`,viewBox:`0 0 360 88`,preserveAspectRatio:`none`,"aria-hidden":`true`},[a(`path`,{d:`M0 22C0 9.85 9.85 0 22 0H128C136.5 0 143.5 5.5 147 13.5C158.5 37.5 201.5 37.5 213 13.5C216.5 5.5 223.5 0 232 0H338C350.15 0 360 9.85 360 22V88H0V22Z`,fill:`#fff`})],-1),a(`div`,kt,[i(l,{to:`/`,class:c([`bottom-nav__item`,{"bottom-nav__item--active":f(`/`)}]),"aria-label":`Главная`},{default:b(()=>[a(`span`,At,[i(s,{icon:`lucide:home`,size:20})])]),_:1},8,[`class`]),i(l,{to:`/stats`,class:c([`bottom-nav__item`,{"bottom-nav__item--active":f(`/stats`)}]),"aria-label":`Статистика`},{default:b(()=>[a(`span`,jt,[i(s,{icon:`lucide:bar-chart-3`,size:20})])]),_:1},8,[`class`]),o[0]||=a(`span`,{class:`bottom-nav__spacer`,"aria-hidden":`true`},null,-1),i(l,{to:`/foods`,class:c([`bottom-nav__item`,{"bottom-nav__item--active":f(`/foods`)}]),"aria-label":`Блюда`},{default:b(()=>[a(`span`,Mt,[i(s,{icon:`lucide:apple`,size:20})])]),_:1},8,[`class`]),i(l,{to:`/settings`,class:c([`bottom-nav__item`,{"bottom-nav__item--active":f(`/settings`)}]),"aria-label":`Настройки`},{default:b(()=>[a(`span`,Nt,[i(s,{icon:`lucide:settings`,size:20})])]),_:1},8,[`class`])])]),a(`button`,{type:`button`,class:c([`bottom-nav__fab`,{"bottom-nav__fab--active":f(`/chat`)}]),"aria-label":`Новый чат`,onClick:p},[i(s,{icon:`lucide:plus`,size:28})],2)])}}},[[`__scopeId`,`data-v-6b296cbb`]]),Ft={class:`layout`},It={key:0,class:`layout__header`},Lt={key:1,class:`layout__subheader`},Rt=w({__name:`AppLayout`,props:{title:{type:String,default:`SafeCalorie`},showNav:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},ellipsisTitle:{type:Boolean,default:!1}},setup(e){return(n,i)=>(r(),t(`div`,Ft,[e.showHeader?(r(),t(`header`,It,[a(`h1`,{class:c([`layout__title`,{"layout__title--ellipsis":e.ellipsisTitle}])},h(e.title),3),u(n.$slots,`header`,{},void 0,!0)])):s(``,!0),n.$slots.subheader?(r(),t(`div`,Lt,[u(n.$slots,`subheader`,{},void 0,!0)])):s(``,!0),a(`main`,{class:c([`layout__main`,{"layout__main--with-nav":e.showNav}])},[u(n.$slots,`default`,{},void 0,!0)],2),e.showNav?(r(),o(Pt,{key:2})):s(``,!0)]))}},[[`__scopeId`,`data-v-b2566cf6`]]);export{Et as n,L as r,Rt as t};