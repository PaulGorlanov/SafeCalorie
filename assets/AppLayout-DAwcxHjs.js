import{B as e,C as t,G as n,H as r,I as i,J as a,M as o,N as s,P as c,Q as l,S as u,U as d,X as f,_ as p,b as m,c as h,i as g,j as _,l as v,m as y,n as b,r as x,t as S,u as C,v as w,x as ee,y as T}from"./index-Cf6LxjA0.js";import{a as te,c as ne,d as E,h as re,i as ie,l as ae,m as oe,n as se,p as ce,r as D,t as le,u as ue}from"./aiUsage-QK-spO9R.js";import{a as O,i as k,n as A,r as j,s as M,t as de}from"./diary-RV3bfvng.js";import{t as N}from"./_plugin-vue_export-helper-BDNMzG2s.js";var fe={type:`json_schema`,json_schema:{name:`nutrition_proposal`,strict:!0,schema:{type:`object`,properties:{text:{type:`string`,description:`Краткий ответ на русском`},name:{type:`string`,description:`Название блюда`},calories:{type:`number`,description:`Калории на указанную порцию`},protein:{type:`number`,description:`Белки в граммах`},carbs:{type:`number`,description:`Углеводы в граммах`},fat:{type:`number`,description:`Жиры в граммах`},portionWeight:{type:`number`,description:`Вес порции в граммах`}},required:[`text`,`name`,`calories`,`protein`,`carbs`,`fat`,`portionWeight`],additionalProperties:!1}}};function P(e){if(!e)return null;try{let t=JSON.parse(e);return String(t.name??``).trim()?{text:String(t.text??``).trim()||`Оценка блюда`,proposals:[I(t)]}:null}catch{return null}}var F={type:`json_schema`,json_schema:{name:`meal_proposals`,strict:!0,schema:{type:`object`,properties:{text:{type:`string`,description:`Краткий ответ на русском (1–2 предложения)`},items:{type:`array`,description:`Блюда для записи в дневник, каждое отдельно`,items:{type:`object`,properties:{name:{type:`string`,description:`Название блюда`},calories:{type:`number`,description:`Ккал на порцию`},protein:{type:`number`,description:`Белки, г`},carbs:{type:`number`,description:`Углеводы, г`},fat:{type:`number`,description:`Жиры, г`},portionWeight:{type:`number`,description:`Вес порции, г`},mealType:{type:`string`,enum:[`breakfast`,`lunch`,`dinner`,`snack`],description:`Рекомендуемый приём пищи`}},required:[`name`,`calories`,`protein`,`carbs`,`fat`,`portionWeight`,`mealType`],additionalProperties:!1}}},required:[`text`,`items`],additionalProperties:!1}}};function I(e){return{name:String(e.name??``).trim(),...M({calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,portionWeight:e.portionWeight}),suggestedMealType:e.mealType||null,status:`pending`}}function pe(e){if(!e)return null;try{let t=JSON.parse(e),n=String(t.text??``).trim();if(Array.isArray(t.items)&&t.items.length){let e=t.items.map(I).filter(e=>e.name&&e.name.length>=3&&e.calories>=20);return e.length?{text:n||`Предлагаю добавить в дневник:`,proposals:e}:null}if(t.name){let e=I(t);return e.name?{text:n||`Оценка блюда`,proposals:[e]}:null}}catch{return null}return null}function me(e,{toolInvocations:t=[],userText:n=``}={}){let r={...e,updatedAt:Date.now()};for(let{name:e,args:n}of t)(e===`get_diary_summary`||e===`list_food_entries`)&&(r.lastTopic=`diary`,n?.date&&(r.lastDiaryDate=n.date),n?.mealType&&(r.lastMealType=n.mealType)),e===`get_profile`&&(r.lastTopic=`profile`),e===`search_foods`&&n?.query&&(r.lastTopic=`food_search`,r.lastFoodQuery=n.query);lt(n)&&(r.lastTopic=`food_log`);let i=(n??``).trim();return i&&(r.lastUserMessage=i.length>200?`${i.slice(0,200)}…`:i),r}function L(e){if(!e)return``;let t=[];return e.lastTopic===`diary`&&(e.lastDiaryDate?t.push(`недавно смотрели дневник за ${e.lastDiaryDate}`):t.push(`недавно обсуждали дневник питания`),e.lastMealType&&t.push(`приём пищи: ${O(e.lastMealType)}`)),e.lastTopic===`profile`&&t.push(`недавно спрашивали о профиле и норме`),e.lastTopic===`food_search`&&e.lastFoodQuery&&t.push(`недавно искали блюдо «${e.lastFoodQuery}»`),t.length?`
Контекст текущего чата: ${t.join(`, `)}.
Учитывай его в уточнениях («а вчера?», «а на завтраке?», «подробнее») — сам выбери инструмент и дату.`:``}function he(e){return e.length<=24?e:e.slice(-24)}var R=[{id:`menu-today`,label:`Меню на сегодня`,text:`Составь меню на сегодня`,shortcut:`/меню`,icon:`lucide:calendar-days`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`составь меню на сегодня`||t===`/меню`||t===`/menu`||t.startsWith(`/меню `)||t.startsWith(`/menu `)}},{id:`week-analysis`,label:`Анализ за неделю`,text:`Дай анализ питания за неделю`,shortcut:`/неделя`,icon:`lucide:chart-line`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`дай анализ питания за неделю`||t===`анализ за неделю`||t===`анализ питания за неделю`||t===`/неделя`||t===`/week`||t.startsWith(`/неделя `)||t.startsWith(`/week `)}},{id:`today-analysis`,label:`Анализ за сегодня`,text:`Проанализируй питание за сегодня`,shortcut:`/сегодня`,icon:`lucide:pie-chart`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`проанализируй питание за сегодня`||t===`анализ за сегодня`||t===`анализ питания за сегодня`||t===`/сегодня`||t===`/today`||t.startsWith(`/сегодня `)||t.startsWith(`/today `)}},{id:`remaining-today`,label:`Остаток на сегодня`,text:`Сколько осталось на сегодня`,shortcut:`/остаток`,icon:`lucide:gauge`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`сколько осталось на сегодня`||t===`остаток на сегодня`||t===`что осталось на сегодня`||t===`/остаток`||t===`/remaining`||t.startsWith(`/остаток `)}},{id:`snack-idea`,label:`Что перекусить`,text:`Что перекусить сейчас`,shortcut:`/перекус`,icon:`lucide:cookie`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`что перекусить сейчас`||t===`что перекусить`||t===`предложи перекус`||t===`идея перекуса`||t===`/перекус`||t===`/snack`||t.startsWith(`/перекус `)}},{id:`macro-balance`,label:`Как добрать БЖУ`,text:`Как добрать БЖУ до нормы`,shortcut:`/бжу`,icon:`lucide:scale`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`как добрать бжу до нормы`||t===`как добрать бжу`||t===`баланс бжу`||t===`как добрать белок`||t===`/бжу`||t===`/macros`||t.startsWith(`/бжу `)}},{id:`yesterday-recap`,label:`Что ел вчера`,text:`Что я ел вчера`,shortcut:`/вчера`,icon:`lucide:history`,match(e){let t=e.trim().toLowerCase().replace(/[.!?…]+$/g,``).trim();return t===`что я ел вчера`||t===`что ел вчера`||t===`итог за вчера`||t===`/вчера`||t===`/yesterday`||t.startsWith(`/вчера `)}}];function ge(e){let t=e?.trim();if(!t)return null;let n=R.find(e=>e.match(t));if(n)return n;let r=t.toLowerCase().replace(/[.!?…]+$/g,``).trim();return/составь\s+меню/.test(r)&&/(сегодня|на\s+день|на\s+сегодня)/.test(r)?R.find(e=>e.id===`menu-today`)??null:/анализ.*недел|итог.*недел|разбор.*недел|оцен.*недел|как\s+(?:я\s+)?питался/.test(r)?R.find(e=>e.id===`week-analysis`)??null:/анализ.*сегодня|проанализируй.*(?:калор|питан)|итог.*сегодня|разбор.*сегодня/.test(r)?R.find(e=>e.id===`today-analysis`)??null:/осталось.*(?:сегодня|на\s+день)|остаток.*(?:сегодня|дня)|сколько.*ещё.*есть/.test(r)?R.find(e=>e.id===`remaining-today`)??null:/что\s+перекусить|предложи\s+перекус|идея\s+перекуса|что\s+перекусить\s+сейчас/.test(r)?R.find(e=>e.id===`snack-idea`)??null:/добрать.*бжу|баланс\s+бжу|не\s+хватает.*белк|как\s+добрать.*(?:белк|углевод|жир)/.test(r)?R.find(e=>e.id===`macro-balance`)??null:/что\s+(?:я\s+)?ел.*вчера|итог.*вчера|вчера.*(?:ел|съел)/.test(r)?R.find(e=>e.id===`yesterday-recap`)??null:null}function z(e,t=1){let n=Number(e)||0;return Number.isInteger(n)?String(n):n.toFixed(t)}function B({calories:e,protein:t,carbs:n,fat:r}){return`${z(e,0)} ккал · Б ${z(t)} / У ${z(n)} / Ж ${z(r)} г`}function _e(e,t=120){if(!e.length)return`Каталог пуст. Предложи свои сбалансированные варианты блюд с оценкой КБЖУ.`;let n=e.slice(0,t).map(e=>`• ${e.name}: ${z(e.calories,0)} ккал, Б ${z(e.protein)} / У ${z(e.carbs)} / Ж ${z(e.fat)} на ${z(e.portionWeight??100,0)} г`);return e.length>t&&n.push(`… и ещё ${e.length-t} блюд в каталоге`),n.join(`
`)}function V(e){return e?.length?e.map((e,t)=>`${t+1}. [${e.meal}] ${e.name} — ${z(e.weight,0)} г, ${z(e.calories,0)} ккал, Б ${z(e.protein)} / У ${z(e.carbs)} / Ж ${z(e.fat)}`).join(`
`):`Сегодня в дневнике пока ничего не записано.`}function H(e){return k.map(({label:t})=>{let n=e?.[t];return n?.length?`${t}: ${n.map(e=>`${e.name} (${z(e.weight,0)} г, ${B(e)})`).join(`; `)}`:`${t}: ничего не записано`}).join(`
`)}var ve={breakfast:.25,lunch:.35,dinner:.3,snack:.1};function ye(e){return k.map(({id:t,label:n})=>{let r=e?.meals?.[n]??[];return{id:t,label:n,filled:r.length>0,items:r}})}function U(e,t){if(!t.length)return{targets:[],minMenuCalories:0,targetMenuCalories:0};let n=t.reduce((e,t)=>e+(ve[t.id]??.25),0),r=Math.max(0,Math.round(e.calories)),i=Math.round(r*.85);return{targets:t.map(t=>{let i=(ve[t.id]??.25)/n;return{...t,targetCalories:Math.round(r*i),targetProtein:Math.round(e.protein*i*10)/10,targetCarbs:Math.round(e.carbs*i*10)/10,targetFat:Math.round(e.fat*i*10)/10,minDishes:r*i>=450?3:r*i>=250?2:1}}),minMenuCalories:i,targetMenuCalories:r}}function be(e,t){let{targets:n,minMenuCalories:r,targetMenuCalories:i}=U(e,t);return n.length?[`Нужно покрыть почти весь остаток дня: цель меню ~${z(i,0)} ккал (минимум ${z(r,0)} ккал, не меньше 85% остатка).`,`После меню допустимый остаток: не больше ${z(Math.round(i*.15),0)} ккал.`,`Распределение по пустым приёмам:`,...n.map(e=>{let t=e.minDishes>1?`, минимум ${e.minDishes} блюда`:`, можно 1–2 блюда`;return`• ${e.label}: ~${z(e.targetCalories,0)} ккал (Б ~${z(e.targetProtein)} / У ~${z(e.targetCarbs)} / Ж ~${z(e.targetFat)} г)${t}`}),`Не предлагай «лёгкий» ужин из одного продукта, если осталось много калорий — добавь гарнир, овощи, белок, соус.`].join(`
`):`Дополнительное меню не требуется — все приёмы заполнены.`}function xe(e){let t=e.filter(e=>e.filled),n=e.filter(e=>!e.filled);return{filled:t,empty:n,filledBlock:t.length?t.map(e=>{let t=e.items.map(e=>`${e.name} (${z(e.weight,0)} г, ${B(e)})`).join(`; `);return`• ${e.label} — УЖЕ ЗАПОЛНЕН: ${t}`}).join(`
`):`Нет заполненных приёмов.`,emptyBlock:n.length?n.map(e=>`• ${e.label} — пустой, нужно предложить блюда`).join(`
`):`Все приёмы пищи уже заполнены.`}}function Se(e,t){if(!e.length)return`Все приёмы пищи уже заполнены.
Кратко сообщи об этом. Покажи остаток до нормы после уже съеденного.
Не предлагай блюда для завтрака, обеда, ужина или перекуса.`;let{targets:n,minMenuCalories:r}=U(t,e);return`${n.map(e=>{let t=Array.from({length:e.minDishes},(t,n)=>`- ${e.minDishes>1?`Блюдо ${n+1}`:`Блюдо`} — порция, ккал, Б / У / Ж`).join(`
`);return`${e.label} (~${z(e.targetCalories,0)} ккал)\n${t}`}).join(`

`)}

Итого по меню: ... ккал (должно быть не меньше ${z(r,0)} ккал), Б ... / У ... / Ж ...
Останется до нормы: ... ккал, Б ... / У ... / Ж ... (остаток должен быть небольшим)`}function W(e,t,n){if(!e?.calories)return``;let r=[`Целевой баланс БЖУ от дневной нормы: ~25% белки, ~45% углеводы, ~30% жиры.`,`Остаток по макросам: белки ${z(n.protein)} г, углеводы ${z(n.carbs)} г, жиры ${z(n.fat)} г.`],i=[{key:`protein`,label:`белков`},{key:`carbs`,label:`углеводов`},{key:`fat`,label:`жиров`}].map(({key:r,label:i})=>{let a=e[r]||0,o=t[r]||0;return{label:i,share:a>0?o/a:0,remaining:n[r]||0}}).sort((e,t)=>e.share-t.share)[0];return i&&i.share<.5&&i.remaining>0&&r.push(`Сейчас больше всего не хватает ${i.label} — учти это при составлении меню.`),r.push(`Меню должно покрывать почти весь остаток дня (85–100% по ккал и близко по Б/У/Ж), а не быть «лёгкой подсказкой» из 1–2 продуктов.`),r.join(`
`)}async function Ce(){let e=g(),[t,n,r,i]=await Promise.all([executeChatTool(`get_diary_summary`,{date:e}),executeChatTool(`get_profile`),executeChatTool(`list_food_entries`,{date:e}),m.foods.toArray()]);return i.sort((e,t)=>e.name.localeCompare(t.name,`ru`,{sensitivity:`base`})),{today:e,diaryToday:t,profile:n,eatenToday:r,foods:i}}function G(e){let{today:t,diaryToday:n,profile:r,eatenToday:i,foods:a}=e,o=n?.consumed??{calories:0,protein:0,carbs:0,fat:0},s=n?.remaining??{calories:0,protein:0,carbs:0,fat:0};return{today:t,diaryToday:n,profile:r,eatenToday:i,foods:a,goals:n?.goals??r?.macroGoals??{calories:r?.dailyCalories??0,protein:0,carbs:0,fat:0},consumed:o,remaining:s}}function K(e){let{today:t,diaryToday:n,profile:r,eatenToday:i,foods:a,goals:o,consumed:s,remaining:c}=G(e),l=`=== ДАТА ===
${t}

=== ДНЕВНАЯ НОРМА ===
${B(o)}
`;return r?.maintenanceCalories&&r.maintenanceCalories!==r.dailyCalories&&(l+=`Поддержание: ${z(r.maintenanceCalories,0)} ккал`,r.calorieGoalLabel&&(l+=` · цель: ${r.calorieGoalLabel}`),l+=`
`),l+=`
=== СЪЕДЕНО СЕГОДНЯ ===
${B(s)}
Записей: ${i?.entries?.length??n?.entriesCount??0}

=== СПИСОК БЛЮД ===
${V(i?.entries)}

=== ПО ПРИЁМАМ ПИЩИ ===
${H(n?.meals)}

=== ОСТАТОК ДО НОРМЫ ===
${B(c)}

=== БАЛАНС БЖУ ===
${W(o,s,c)}

=== КАТАЛОГ БЛЮД (${a.length} шт.) ===
${_e(a,80)}
`,r?.weight&&(l+=`
=== ПРОФИЛЬ ===
Вес ${r.weight} кг, рост ${r.height} см, возраст ${r.age}.`),l}async function we(){let e=g(),t=h(e,-1),[n,r,i]=await Promise.all([executeChatTool(`get_diary_summary`,{date:t}),executeChatTool(`get_profile`),executeChatTool(`list_food_entries`,{date:t})]);return{today:e,yesterday:t,diaryYesterday:n,profile:r,eatenYesterday:i}}function Te(e=g()){return Array.from({length:7},(t,n)=>h(e,n-6))}function Ee(e){return C.find(t=>t.value===e)?.label??e??`не указана`}function De(e){return e===`male`?`мужской`:e===`female`?`женский`:e??`не указан`}function Oe(e){let t=e.filter(e=>(e.entriesCount??0)>0),n=t.reduce((e,t)=>{let n=t.consumed??{};return e.calories+=n.calories??0,e.protein+=n.protein??0,e.carbs+=n.carbs??0,e.fat+=n.fat??0,e.entries+=t.entriesCount??0,e},{calories:0,protein:0,carbs:0,fat:0,entries:0}),r=t.length||1;return{loggedDaysCount:t.length,emptyDaysCount:e.length-t.length,totals:n,averages:{calories:n.calories/r,protein:n.protein/r,carbs:n.carbs/r,fat:n.fat/r,entries:n.entries/r}}}function ke(e,t,n){let r=n?.calories??0;return t.map((t,n)=>{let i=e[n],a=i?.consumed??{calories:0,protein:0,carbs:0,fat:0},o=i?.entriesCount??0,s=x(t);if(!o)return`• ${s} (${t}): нет записей`;let c=r>0?Math.round(a.calories-r):0,l=r>0?c>0?`+${c} ккал к норме`:c<0?`${c} ккал к норме`:`в норме`:``;return`• ${s} (${t}): ${z(a.calories,0)} ккал, Б ${z(a.protein)} / У ${z(a.carbs)} / Ж ${z(a.fat)} г · ${o} записей · ${l}`}).join(`
`)}function Ae(e,t=10){if(!e.length)return`За неделю нет записей блюд.`;let n=new Map;for(let t of e){let e=t.name?.trim();if(!e)continue;let r=n.get(e)??{name:e,count:0,calories:0,protein:0,carbs:0,fat:0};r.count+=1,r.calories+=t.calories??0,r.protein+=t.protein??0,r.carbs+=t.carbs??0,r.fat+=t.fat??0,n.set(e,r)}return[...n.values()].sort((e,t)=>t.count-e.count||t.calories-e.calories).slice(0,t).map((e,t)=>`${t+1}. ${e.name} — ${e.count}×, ${z(e.calories,0)} ккал, Б ${z(e.protein)} / У ${z(e.carbs)} / Ж ${z(e.fat)} г`).join(`
`)}function je(e,t){if(!e.length)return t?.weight?`Записей веса за неделю нет. Текущий вес в профиле: ${z(t.weight)} кг.`:`Записей веса за неделю нет.`;let n=[...e].sort((e,t)=>e.date.localeCompare(t.date)),r=n[0],i=n[n.length-1],a=i.weight-r.weight,o=Math.abs(a)<.05?`без изменений`:a>0?`+${z(a)} кг`:`${z(a)} кг`,s=n.map(e=>`• ${x(e.date)} (${e.date}): ${z(e.weight)} кг`);return s.push(`Изменение за период: ${o} (${z(r.weight)} → ${z(i.weight)} кг)`),s.join(`
`)}function Me(e,t){let n=t?.calories??0;if(!n)return`Дневная норма калорий не задана.`;let r=e.filter(e=>(e.entriesCount??0)>0);if(!r.length)return`Нет данных для оценки попадания в норму.`;let i=n*.1,a=0,o=0,s=0;for(let e of r){let t=(e.consumed?.calories??0)-n;t<-i?a+=1:t>i?s+=1:o+=1}return`Дней с данными: ${r.length}. В пределах ±10% от нормы: ${o}. Ниже нормы: ${a}. Выше нормы: ${s}.`}async function Ne(){let e=g(),t=Te(e),n=t[0],r=t[t.length-1],[i,...a]=await Promise.all([executeChatTool(`get_profile`),...t.map(e=>executeChatTool(`get_diary_summary`,{date:e}))]),[o,s,c]=await Promise.all([m.foodEntries.where(`date`).between(n,r,!0,!0).toArray(),m.weightLogs.where(`date`).between(n,r,!0,!0).toArray(),m.foods.toArray()]),l=j(o,c);return{today:e,weekStart:n,weekEnd:r,dates:t,profile:i,daySummaries:a,goals:i?.macroGoals??{calories:i?.dailyCalories??0,protein:0,carbs:0,fat:0},weekStats:Oe(a),entries:l,weightLogs:s}}async function Pe(e){switch(e){case`menu-today`:case`today-analysis`:case`remaining-today`:case`snack-idea`:case`macro-balance`:return Ce();case`week-analysis`:return Ne();case`yesterday-recap`:return we();default:return null}}function Fe(e,t,n,r){return[{role:`system`,content:Le(e,t,n)},{role:`user`,content:Ie(e,r,t)}]}function Ie(e,t,n=null){if(e.id===`menu-today`){let{empty:e}=xe(ye(n?.diaryToday)),r=e.map(e=>e.label.toLowerCase()).join(`, `);if(!e.length)return`${t.trim()}

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
Не задавай уточняющих вопросов.`:t.trim()}function Le(e,t,n=null){return e.id===`menu-today`?Re(t,n):e.id===`week-analysis`?ze(t,n):e.id===`today-analysis`?Be(t,n):e.id===`remaining-today`?Ve(t,n):e.id===`snack-idea`?He(t,n):e.id===`macro-balance`?Ue(t,n):e.id===`yesterday-recap`?We(t,n):`Ты помощник по учёту калорий. Отвечай на русском.`}function Re(e,t){let{today:n,diaryToday:r,profile:i,eatenToday:a,foods:o}=e,s=r?.consumed??{calories:0,protein:0,carbs:0,fat:0},c=r?.remaining??{calories:0,protein:0,carbs:0,fat:0},l=r?.goals??i?.macroGoals??{calories:i?.dailyCalories??0,protein:0,carbs:0,fat:0},{filled:u,empty:d,filledBlock:f,emptyBlock:p}=xe(ye(r)),m=Se(d,c),h=be(c,d),g=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь вызвал команду «Составь меню на сегодня».

=== ДАТА ===
${n}

=== ДНЕВНАЯ НОРМА (калории и БЖУ) ===
Калории: ${z(l.calories,0)} ккал
Белки: ${z(l.protein)} г
Углеводы: ${z(l.carbs)} г
Жиры: ${z(l.fat)} г
`;i?.maintenanceCalories&&i.maintenanceCalories!==i.dailyCalories&&(g+=`Поддержание: ${z(i.maintenanceCalories,0)} ккал`,i.calorieGoalLabel&&(g+=` · цель: ${i.calorieGoalLabel}`),g+=`
`),g+=`
=== УЖЕ СЪЕДЕНО СЕГОДНЯ (итого) ===
${B(s)}
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
${B(c)}

=== БЮДЖЕТ МЕНЮ (обязательно) ===
${h}

=== БАЛАНС БЖУ ===
${W(l,s,c)}

=== КАТАЛОГ БЛЮД ПОЛЬЗОВАТЕЛЯ (${o.length} шт.) ===
Сначала смотри каталог. Если блюда не подходят по балансу, калориям или разнообразию — предложи свои варианты с оценкой КБЖУ.
${_e(o)}
`,i?.weight&&(g+=`
=== ПРОФИЛЬ ===
Вес ${i.weight} кг, рост ${i.height} см, возраст ${i.age}.`),g+=L(t);let _=d.map(e=>e.label).join(`, `)||`нет`,v=u.map(e=>e.label).join(`, `);g+=`

=== ЗАДАЧА ===
1. Составь меню ТОЛЬКО для пустых приёмов: ${_}.`,u.length&&(g+=`
2. Приёмы «${v}» уже заполнены — полностью исключи их из ответа.
3. Не предлагай дополнительные блюда к уже заполненным приёмам.`);let{minMenuCalories:y,targetMenuCalories:b}=U(c,d);return g+=`
4. Учти всё, что уже съедено сегодня (списки выше).
5. Меню должно покрыть 85–100% остатка: цель ~${z(b,0)} ккал, минимум ${z(y,0)} ккал. Не предлагай «облегчённый» вариант на 100–200 ккал, если осталось ${z(c.calories,0)} ккал.
6. Распредели калории по пустым приёмам согласно блоку «БЮДЖЕТ МЕНЮ». В крупных приёмах — несколько блюд (гарнир, белок, овощи).
7. Не превышай остаток по калориям и стремись близко к остатку по БЖУ (после меню должно остаться не больше ~15% текущего остатка).
8. Меню должно быть сбалансированным и разнообразным, не из одного продукта.
9. Используй каталог, но можешь предлагать свои блюда, если так меню получится лучше.
10. Для каждого блюда: название, порция (г), ккал, Б/У/Ж.
11. В конце — итого по меню и остаток до нормы после меню. Проверь: итого меню ≥ ${z(y,0)} ккал.

КРИТИЧНО: сразу выдай готовое меню. Без уточняющих вопросов.
КРИТИЧНО: если приём пищи уже заполнен в дневнике — не выводи для него раздел и не предлагай блюда.
КРИТИЧНО: меню должно быть полноценным и закрывать дневную норму, а не минимальным набором продуктов.

Формат ответа:
${m}

Ответь обычным текстом на русском. Не возвращай JSON.`,g}function ze(e,t){let{today:n,weekStart:r,weekEnd:i,dates:a,profile:o,daySummaries:s,goals:c,weekStats:l,entries:u,weightLogs:d}=e;if(o?.error)return`Профиль пользователя не заполнен. Попроси заполнить профиль в настройках и повторить анализ.`;let f=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь вызвал команду «Анализ питания за неделю».

=== ПЕРИОД ===
С ${r} по ${i} (7 дней, включая сегодня ${n})

=== ДНЕВНАЯ НОРМА ПОЛЬЗОВАТЕЛЯ ===
Калории: ${z(c.calories,0)} ккал
Белки: ${z(c.protein)} г
Углеводы: ${z(c.carbs)} г
Жиры: ${z(c.fat)} г
`;return o?.maintenanceCalories&&o.maintenanceCalories!==o.dailyCalories&&(f+=`Поддержание: ${z(o.maintenanceCalories,0)} ккал`,o.calorieGoalLabel&&(f+=` · цель: ${o.calorieGoalLabel}`),f+=`
`),f+=`
=== ПРОФИЛЬ ===
Вес ${z(o.weight)} кг, рост ${z(o.height)} см, возраст ${o.age}.
Пол: ${De(o.gender)}. Активность: ${Ee(o.activityLevel)}.

=== СВОДКА ЗА НЕДЕЛЮ ===
Дней с записями: ${l.loggedDaysCount} из 7
Дней без записей: ${l.emptyDaysCount}
Всего записей в дневнике: ${z(l.totals.entries,0)}

Итого за неделю (только дни с записями):
${B(l.totals)}

Среднее в день (по дням с записями):
${B(l.averages)}

Попадание в калорийную норму:
${Me(s,c)}

=== ПО ДНЯМ ===
${ke(s,a,c)}

=== ЧАСТЫЕ БЛЮДА ЗА НЕДЕЛЮ ===
${Ae(u)}

=== ВЕС ЗА НЕДЕЛЮ ===
${je(d,o)}
`,f+=L(t),f+=`

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

Ответь обычным текстом на русском. Можно использовать markdown для заголовков и списков. Не возвращай JSON.`,f}function Be(e,t){if(e?.profile?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let n=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь вызвал команду «Анализ питания за сегодня».

${K(e)}`;return n+=L(t),n+=`

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

Ответь текстом на русском. Можно markdown. Не JSON.`,n}function Ve(e,t){if(e?.profile?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let{remaining:n,goals:r}=G(e),i=r.calories>0?n.calories/r.calories:0,a=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь спрашивает, сколько осталось на сегодня.

${K(e)}`;return a+=L(t),a+=`

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

Не JSON.`,a}function He(e,t){if(e?.profile?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let{remaining:n}=G(e),r=Math.min(Math.max(n.calories,0),300),i=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь просит идею перекуса.

${K(e)}`;return i+=L(t),i+=`

=== БЮДЖЕТ ПЕРЕКУСА ===
Ориентир: до ${z(r,0)} ккал (не больше 30% оставшихся калорий и не больше 300 ккал).

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

Не JSON.`,i}function Ue(e,t){if(e?.profile?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let{goals:n,consumed:r,remaining:i}=G(e),a=[{label:`белки`,key:`protein`},{label:`углеводы`,key:`carbs`},{label:`жиры`,key:`fat`}].map(({label:e,key:t})=>({label:e,remaining:i[t]??0,goal:n[t]??0,consumed:r[t]??0})).sort((e,t)=>t.remaining-e.remaining).map(e=>`• ${e.label}: осталось ${z(e.remaining)} г (съедено ${z(e.consumed)} из ${z(e.goal)} г)`).join(`
`),o=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь спрашивает, как добрать БЖУ до нормы.

${K(e)}

=== ДЕФИЦИТЫ / ОСТАТКИ ПО МАКРОСАМ ===
${a}
`;return o+=L(t),o+=`

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

Не JSON.`,o}function We(e,t){let{yesterday:n,diaryYesterday:r,profile:i,eatenYesterday:a}=e;if(i?.error)return`Профиль не заполнен. Попроси заполнить профиль в настройках.`;let o=r?.consumed??{calories:0,protein:0,carbs:0,fat:0},s=r?.remaining??{calories:0,protein:0,carbs:0,fat:0},c=r?.goals??i?.macroGoals??{calories:i?.dailyCalories??0,protein:0,carbs:0,fat:0},l=`Ты диетолог-помощник в приложении SafeCalorie.
Пользователь спрашивает, что он ел вчера.

=== ДАТА ===
${n} (${x(n)})

=== НОРМА ===
${B(c)}

=== ИТОГО ЗА ВЧЕРА ===
${B(o)}
Остаток к норме: ${B(s)}
Записей: ${a?.entries?.length??r?.entriesCount??0}

=== СПИСОК БЛЮД ===
${V(a?.entries)}

=== ПО ПРИЁМАМ ===
${H(r?.meals)}
`;return l+=L(t),l+=`

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

Не JSON.`,l}var Ge=/^(?:рекомендац|итого|общ|dinner|lunch|breakfast|snack|ужин|обед|завтрак|перекус)$/i;function Ke(e){if(!e?.name)return!1;let t=String(e.name).trim();return!(t.length<3||Ge.test(t)||Number(e.calories)<20)}function q(e){return(e??[]).filter(Ke)}function qe(e){return e.replace(/```(?:json)?\s*/gi,``).replace(/```/g,``).trim()}function Je(e){return!e||typeof e!=`object`?e:{name:e.name??e.название??e.блюдо??e.dish,calories:e.calories??e.calories_kcal??e.калории??e.ккал??e.kcal,protein:e.protein??e.белки??e.белок,carbs:e.carbs??e.carbohydrates??e.углеводы??e.углевод,fat:e.fat??e.fats??e.жиры??e.жир,portionWeight:e.portionWeight??e.weight??e.вес??e.portion_weight,text:e.text??e.ответ??e.message??e.description}}function Ye(e){let t=Je(e);if(!t||typeof t!=`object`)return null;let n=String(t.name??``).trim(),r=Number(t.calories),i=Number(t.protein),a=Number(t.carbs),o=Number(t.fat);if(!n||Number.isNaN(r))return null;let s={name:n,...M({calories:r,protein:Number.isNaN(i)?0:i,carbs:Number.isNaN(a)?0:a,fat:Number.isNaN(o)?0:o,portionWeight:t.portionWeight})};return Ke(s)?s:null}function Xe(e){let t=[],n=qe(e);for(let e=0;e<n.length;e++){if(n[e]!==`{`)continue;let r=0;for(let i=e;i<n.length;i++)if(n[i]===`{`&&r++,n[i]===`}`&&r--,r===0){t.push(n.slice(e,i+1));break}}return t}function J(e){try{let t=JSON.parse(e);if(Array.isArray(t.items)&&t.items.length){let e=q(t.items.map(e=>Ye(e)).filter(Boolean));if(e.length)return{text:String(t.text??``).trim(),proposals:e.map(e=>({...e,status:`pending`}))}}let n=Ye(t);if(n)return{text:typeof t.text==`string`?t.text:typeof t.ответ==`string`?t.ответ:``,proposal:n};if(t&&typeof t==`object`&&(t.text||t.ответ))return{text:t.text??t.ответ??``,proposal:null}}catch{}return null}var Ze=/составь\s+меню|подбери\s+меню|меню\s+на\s+(?:сегодня|день)/i,Qe=/анализ.*недел|итог.*недел|разбор.*недел|оцен.*недел|как\s+(?:я\s+)?питался.*недел/i;function $e(e){return Ze.test((e??``).trim())}function et(e){return Qe.test((e??``).trim())}var tt=/(?:добав|запиш|внес|сохран|подтверд|занес).*(?:меню|дневник|рацион|план)|(?:в|ко)\s+меню|в\s+дневник|на\s+сегодня.*(?:добав|запиш)/i,nt=/^(?:добавь|добавьте|запиши|запишите|внеси|сохрани|подтверди|занеси)(?:[.!?\s]|$)/i;function rt(e){let t=(e??``).trim();return t?nt.test(t)?!0:tt.test(t):!1}function it(e){let t=(e??``).trim();return t?rt(t)?!0:/(\d+)\s*(?:г|гр|грамм)(?:\b|[\s,.+]|$)/i.test(t)&&/[а-яё]/i.test(t):!1}var at=/^(?:да|давай|добавь|добавьте|ок|окей|хорошо|согласен|сохрани|запиши|подтверди|вноси|занеси|уложи|норм|нормально)(?:[!?.,\s]|$)/i,ot=/(?:рассчит|посчит|оцени|вычисл).*(?:калор|бжу|кбжу|белк|макро)|(?:калор|бжу|кбжу).*(?:рассчит|посчит|оцени|сам)/i,st=/(?:раздели|разбей|подели|распредели).*(?:на|по)|(?:отдельно|по\s+отдельности|частями)/i;function ct(e){return(e??[]).slice(-8).some(e=>{if(e.nutritionProposals?.length||e.nutritionProposal)return!0;let t=e.content??``;return/(\d+)\s*(?:ккал|kcal)/i.test(t)&&/(?:белк|углевод|жир)/i.test(t)})}function lt(e,{messages:t=[]}={}){let n=(e??``).trim();return!n||$e(n)||et(n)||ge(n)?!1:!!(rt(n)||it(n)||at.test(n)&&ct(t)||st.test(n)&&ct(t)||ot.test(n)&&(t??[]).filter(e=>e.role===`user`).slice(-3).some(e=>/(\d+)\s*(?:г|гр|грамм)/i.test(e.content??``)||/(?:рис|мяс|куриц|суп|салат|гуляш|каша|яйц|рыб|творог|овсян)/i.test(e.content??``)))}function ut({imageData:e}){return!!e}function dt(e){if(!e)return{text:``,proposal:null,proposals:[]};let t=Xe(e);for(let n=t.length-1;n>=0;n--){let r=J(t[n]);if(r?.proposals?.length)return{text:r.text||`Предлагаю добавить в дневник:`,proposal:r.proposals[0],proposals:r.proposals};if(r?.proposal)return{text:r.text||e.replace(t[n],``).trim()||`Оценка блюда`,proposal:r.proposal}}let n=J(qe(e));return n?.proposals?.length?{text:n.text||`Предлагаю добавить в дневник:`,proposal:n.proposals[0],proposals:n.proposals}:n?.proposal?{text:n.text||`Оценка блюда`,proposal:n.proposal}:{text:e.trim(),proposal:null,proposals:[]}}function Y(e){let t=pe(e);if(t?.proposals?.length)return{text:t.text,proposals:q(t.proposals)};let n=P(e);if(n?.proposals?.length)return{text:n.text,proposals:q(n.proposals)};let r=Xe(e);for(let e=r.length-1;e>=0;e--){let t=J(r[e]);if(t?.proposals?.length)return{text:t.text||`Предлагаю добавить в дневник:`,proposals:t.proposals}}let i=dt(e);return i.proposals?.length?{text:i.text,proposals:i.proposals}:i.proposal?{text:i.text,proposals:[{...i.proposal,status:`pending`}]}:{text:e?.trim()??``,proposals:[]}}function ft(){let e=g(),t=h(e,-1);return[{type:`function`,function:{name:`get_profile`,description:`Профиль пользователя и дневные цели по калориям и БЖУ. Вызывай при вопросах о норме, целях, параметрах тела.`,parameters:{type:`object`,properties:{},additionalProperties:!1}}},{type:`function`,function:{name:`get_diary_summary`,description:`Сводка питания за день: съедено ккал и БЖУ, остаток до нормы, блюда по приёмам пищи.
Справочник дат: сегодня=${e}, вчера=${t}, позавчера=${h(e,-2)}.
Вызывай когда спрашивают сколько съел, итог за день, остаток калорий, БЖУ за период.`,parameters:{type:`object`,properties:{date:{type:`string`,description:`Дата YYYY-MM-DD. Сегодня: ${e}, вчера: ${t}.`}},additionalProperties:!1}}},{type:`function`,function:{name:`list_food_entries`,description:`Список записей дневника за день. Справочник дат: сегодня=${e}, вчера=${t}.
Вызывай когда спрашивают что ел, список блюд, детали по приёму пищи.`,parameters:{type:`object`,properties:{date:{type:`string`,description:`YYYY-MM-DD. Сегодня: ${e}, вчера: ${t}.`},mealType:{type:`string`,enum:[`breakfast`,`lunch`,`dinner`,`snack`],description:`breakfast=завтрак, lunch=обед, dinner=ужин, snack=перекус`}},additionalProperties:!1}}},{type:`function`,function:{name:`search_foods`,description:`Поиск блюд в сохранённом каталоге по названию`,parameters:{type:`object`,properties:{query:{type:`string`,description:`Часть названия блюда`},limit:{type:`number`,description:`Макс. результатов, по умолчанию 10`}},required:[`query`],additionalProperties:!1}}}]}async function X(e,t={}){switch(e){case`get_profile`:return pt();case`get_diary_summary`:return mt(t.date);case`list_food_entries`:return ht(t);case`search_foods`:return gt(t);default:return{error:`Неизвестный инструмент: ${e}`}}}async function pt(){let e=await m.profile.get(1);if(!e)return{error:`Профиль не заполнен`};let t=b(e.dailyCalories);return{weight:e.weight,height:e.height,age:e.age,gender:e.gender,activityLevel:e.activityLevel,calorieGoal:e.calorieGoal??`maintain`,calorieGoalLabel:p(e.calorieGoal),maintenanceCalories:y(e),dailyCalories:e.dailyCalories,macroGoals:t}}async function mt(e){let t=e||g(),n=await A(t,m),r=v(n),i=await m.profile.get(1),a=b(i?.dailyCalories??0),o={};for(let e of n){let t=O(e.mealType);o[t]||(o[t]=[]),o[t].push({name:e.name,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,weight:e.weight,isOrphan:e.isOrphan})}return{date:t,consumed:r,remaining:{calories:(i?.dailyCalories??0)-r.calories,protein:a.protein-r.protein,carbs:a.carbs-r.carbs,fat:a.fat-r.fat},goals:{calories:i?.dailyCalories??null,...a},meals:o,entriesCount:n.length}}async function ht({date:e,mealType:t}){let n=e||g(),r=await A(n,m);return t&&(r=r.filter(e=>e.mealType===t)),{date:n,mealType:t??null,entries:r.map(e=>({name:e.name,meal:O(e.mealType),calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,weight:e.weight,isOrphan:e.isOrphan}))}}async function gt({query:e,limit:t=10}){let n=(e??``).trim().toLowerCase();return n?{foods:(await m.foods.toArray()).filter(e=>e.name.toLowerCase().includes(n)).slice(0,Math.min(t,20)).map(e=>({name:e.name,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,portionWeight:e.portionWeight}))}:{foods:[]}}var _t=`
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
text — 1–2 предложения. Детали только в items.`,Z=`
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
Если в истории есть калории/БЖУ по блюдам, восстанови блюда из этой истории и верни непустой items.`;function yt({chatContext:e,profile:t,diaryToday:n}){let r=S(),i=t??r.profile,a=g(),o=h(a,-1),s=`Ты помощник по учёту калорий. Помогай пользователю следить за питанием.`;return i&&(s=`Ты помощник по учёту калорий. Профиль: вес ${i.weight} кг, рост ${i.height} см, норма ${i.dailyCalories} ккал/день.`),s+=L(e),s+=`
Сегодня: ${a}, вчера: ${o}.`,n?.consumed&&(s+=`
Уже съедено сегодня: ${Math.round(n.consumed.calories)} ккал (Б ${Math.round(n.consumed.protein)} / У ${Math.round(n.consumed.carbs)} / Ж ${Math.round(n.consumed.fat)} г).`),s+=_t,s}var bt=`
Пользователь прислал фото еды. Оцени калории и БЖУ по схеме nutrition_proposal.`;function xt(e){let t=e.replace(/\s+/g,` `).trim();return t?t.length>40?`${t.slice(0,40)}…`:t:`Новый чат`}async function St({providerId:e,baseURL:t,token:n,messages:r,model:i}){let a=E(e)?[{jsonMode:!0},{jsonMode:!1}]:[{responseFormat:F},{responseFormat:fe},{jsonMode:!0}],o=null;for(let s of a)try{return await D({providerId:e,baseURL:t,token:n,messages:r,model:i,...s})}catch(e){o=e}throw o??Error(`Не удалось получить ответ`)}async function Ct({providerId:e,baseURL:t,token:n,messages:r,model:i}){let a=r.filter(e=>e.role!==`system`),o=e=>typeof e==`string`?e:Array.isArray(e)?e.filter(e=>e?.type===`text`&&typeof e.text==`string`).map(e=>e.text).join(` `):``,s=e=>/(\d+)\s*(?:ккал|kcal)/i.test(e)&&/(?:белк|углевод|жир|бжу)/i.test(e),c=a.slice(-10).map(e=>({role:e.role,content:o(e.content).trim()})).filter(e=>e.content&&s(e.content)).slice(-3).map(e=>`${e.role}: ${e.content.slice(0,500)}`).join(`
`),l;try{l=await ie({providerId:e,baseURL:t,token:n,messages:r,model:i,tools:ft(),executeTool:X,maxRounds:4})}catch{l=await St({providerId:e,baseURL:t,token:n,messages:r,model:i})}if(q(Y(l.content).proposals).length)return l;let u=[{role:`system`,content:Z},...a];try{l=await D({providerId:e,baseURL:t,token:n,messages:u,model:i,jsonMode:!0})}catch{try{l=await D({providerId:e,baseURL:t,token:n,messages:u,model:i,jsonMode:!1})}catch{return l}}if(q(Y(l.content).proposals).length||!c)return l;let d=[{role:`system`,content:`${Z}
${vt}
Опирайся на этот контекст:
${c}
Верни JSON по схеме meal_proposals с непустым items.`},...a];try{l=await D({providerId:e,baseURL:t,token:n,messages:d,model:i,responseFormat:F})}catch{try{l=await D({providerId:e,baseURL:t,token:n,messages:d,model:i,jsonMode:!0})}catch{}}return l}function wt({response:e,wantsLogFood:t,hasImage:n}){if(e.usedTools&&!t)return{displayContent:e.content.trim(),proposals:[]};if(t||n){let t=Y(e.content);return{displayContent:t.text||e.content.trim(),proposals:q(t.proposals)}}let r=P(e.content);if(r)return{displayContent:r.text,proposals:q(r.proposals)};let i=dt(e.content),a=i.proposals?.length?q(i.proposals):i.proposal?q([{...i.proposal,status:`pending`}]):[];return{displayContent:i.text,proposals:a}}function Q(e){if(!e)return null;let t={name:String(e.name??``),...M({calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,portionWeight:e.portionWeight??e.weight})};return e.suggestedMealType&&(t.suggestedMealType=e.suggestedMealType),e.status&&(t.status=e.status),t}function $(e){return(e??[]).map(Q).filter(Boolean)}function Tt(e){let t={...e};return t.nutritionProposals?(t.nutritionProposals=$(t.nutritionProposals),t.nutritionProposal=t.nutritionProposals[0]??void 0):t.nutritionProposal&&=Q(t.nutritionProposal),t}var Et=t(`chat`,()=>{let e=a([]),t=a(null),n=a([]),r=a(!1),i=a(null),o=a(null);function s(){t.value&&localStorage.setItem(T,String(t.value))}async function c(){e.value=await m.chats.orderBy(`updatedAt`).reverse().toArray()}async function l(e=t.value){if(!e){n.value=[];return}n.value=await m.chatMessages.where(`chatId`).equals(e).sortBy(`createdAt`)}async function u(e){return await m.chatMessages.where(`chatId`).equals(e).count()===0}async function d(){await c();let t=e.value[0];return t&&await u(t.id)?(await _(t.id),t.id):p()}async function f(){if(await c(),!e.value.length){await p(`Чат 1`);return}let n=Number(localStorage.getItem(T)),r=e.value.some(e=>e.id===n)?n:e.value[0].id;t.value=r,s(),await l(r)}async function p(e=`Новый чат`){let t=Date.now(),n=await m.chats.add({title:e,createdAt:t,updatedAt:t});return await c(),await _(n),n}async function _(e){t.value=e,s(),i.value=null,await l(e)}async function v(r){if(await m.chatMessages.where(`chatId`).equals(r).delete(),await m.chats.delete(r),await c(),t.value===r){if(e.value.length){await _(e.value[0].id);return}t.value=null,n.value=[],localStorage.removeItem(T),await p(`Чат 1`)}}async function y(e,t={}){let n=Date.now();await m.chats.update(e,{updatedAt:n,...t}),await c()}async function b(){await f()}function x({hasImage:e=!1,chatContext:t=null}={}){let n=S().profile,r=g(),i=h(r,-1),a=`Ты помощник по учёту калорий. Помогай пользователю следить за питанием.`;return n&&(a=`Ты помощник по учёту калорий. Профиль пользователя: вес ${n.weight} кг, рост ${n.height} см, возраст ${n.age}, пол ${n.gender===`male`?`мужской`:`женский`}. Дневная норма калорий: ${n.dailyCalories} ккал.`),e?a+=bt:(a+=L(t),a+=`
У тебя есть инструменты для чтения дневника и каталога блюд в приложении.
Сегодня: ${r}, вчера: ${i}.
Сам реши, нужен ли инструмент и с какими параметрами (дата, приём пищи).
Учитывай историю сообщений и контекст чата в уточняющих вопросах.
Если вопрос о съеденном, калориях, БЖУ, дневнике, норме — вызови get_diary_summary, list_food_entries, get_profile или search_foods.
Не выдумывай цифры о дневнике — только данные из инструментов.
Если инструменты не нужны и пользователь описывает новое блюдо — ответь JSON с полями text, name, calories, protein, carbs, fat, portionWeight.
Для вопросов о дневнике — обычным текстом, без JSON.`),a}function C(){let e=w(),t=se(),n=t.activeProvider,r=ae(n),i=ce(n,e.getToken(n));if(!i&&ue(n))throw Error(`Укажите API-ключ для ${r.name} в настройках`);if(n===`lmstudio`){let e=ne();if(e)throw Error(e);if(!t.activeModel)throw Error(`Выберите модель LM Studio в настройках`)}return{providerId:n,token:i,baseURL:oe(n,{lmstudioBaseURL:t.lmstudioBaseURL}),provider:r}}function ee(e,t){if(!t)return e||` `;let n=[];return e?n.push({type:`text`,text:e}):n.push({type:`text`,text:`Оцени калории и состав блюда на фото. Ответь кратко на русском.`}),n.push({type:`image_url`,image_url:{url:t}}),n}function E(){return he(n.value.map(e=>e.imageData?{role:e.role,content:ee(e.content,e.imageData)}:{role:e.role,content:e.content}))}async function O(e){return(await m.chats.get(e))?.context??null}async function k(t,n){await m.chats.update(t,{context:n});let r=e.value.find(e=>e.id===t);r&&(r.context=n)}function A(e){for(let t=e-1;t>=0;t--){let e=n.value[t];if(e.role===`user`)return e.imageData??null}return null}async function j(e,t){let r=Tt(t);await m.chatMessages.update(e,r);let i=n.value.findIndex(t=>t.id===e);i!==-1&&(n.value[i]={...n.value[i],...r})}function M(e,t){return e?{usageCostRub:e.costRub??0,usageTotalTokens:e.totalTokens??0,usageKind:t}:{}}async function N({providerId:e,model:t,kind:n,usage:r}){r&&await le().logUsage({providerId:e,model:t,kind:n,usage:r})}async function P({text:e=``,imageData:a=null}={}){let s=e.trim();if(!s&&!a)return;t.value||await p();let c=t.value,l,u,d;try{({providerId:l,token:u,baseURL:d}=C())}catch(e){throw i.value=e.message,e}let f=se(),h=ut({imageData:a}),_=h?null:ge(s),v=!_&&!h&&(lt(s,{messages:n.value})||it(s)),b=s||(a?`Оцени калории на фото`:``);n.value.length===0&&s&&await y(c,{title:xt(s)});let S=o.value;o.value=null;let w={chatId:c,role:`user`,content:b,imageData:a??void 0,providerId:l,createdAt:Date.now(),...M(S,`transcribe`)};w.id=await m.chatMessages.add(w),n.value.push(w),await y(c),r.value=!0,i.value=null;try{let e=await O(c),t=n.value.slice(0,-1),r;r=_?Fe(_,await Pe(_.id),e,s):v?[{role:`system`,content:yt({chatContext:e,diaryToday:await X(`get_diary_summary`,{date:g()})})},...E()]:[{role:`system`,content:x({hasImage:h,chatContext:e})},...E()];let i;if(h)try{i=await D({providerId:l,baseURL:d,token:u,messages:r,model:f.activeModel,responseFormat:fe})}catch{try{i=await D({providerId:l,baseURL:d,token:u,messages:r,model:f.activeModel,jsonMode:!0})}catch{i=await D({providerId:l,baseURL:d,token:u,messages:r,model:f.activeModel,jsonMode:!1})}}else if(_)i=await D({providerId:l,baseURL:d,token:u,messages:r,model:f.activeModel,jsonMode:!1});else if(v)i=await Ct({providerId:l,baseURL:d,token:u,messages:r,model:f.activeModel});else if(re(l,s,{hasImage:h,messages:t}))try{i=await ie({providerId:l,baseURL:d,token:u,messages:r,model:f.activeModel,tools:ft(),executeTool:X})}catch(e){if(i=await D({providerId:l,baseURL:d,token:u,messages:r,model:f.activeModel,jsonMode:!1}),!i.content)throw e}else i=await D({providerId:l,baseURL:d,token:u,messages:r,model:f.activeModel,jsonMode:!1});let{displayContent:a,proposals:o}=wt({response:i,wantsLogFood:v,hasImage:h}),p={chatId:c,role:`assistant`,content:a||i.content,nutritionProposals:o.length?$(o):void 0,nutritionProposal:o[0]?Q(o[0]):void 0,nutritionStatus:o.length?`pending`:void 0,providerId:l,createdAt:Date.now(),...M(i.usage,`chat`)};p.id=await m.chatMessages.add(p),n.value.push(p),await k(c,me(e,{toolInvocations:i.toolInvocations??[],userText:s})),await y(c),await N({providerId:l,model:i.model,kind:`chat`,usage:i.usage})}catch(e){throw i.value=e.message,e}finally{r.value=!1}}async function F(e){let{providerId:t,token:n,baseURL:r}=C(),i=await te({providerId:t,baseURL:r,token:n,audioBlob:e});return o.value=i.usage??null,await N({providerId:t,model:`whisper-1`,kind:`transcribe`,usage:i.usage}),i.text}async function I(e,t,r,i=0){let a=n.value.findIndex(t=>t.id===e);if(a===-1)return;let o=n.value[a],s=o.nutritionProposals?.length?$(o.nutritionProposals):o.nutritionProposal?[Q({...o.nutritionProposal,status:o.nutritionStatus??`pending`})]:[],c=s[i];if(!c||c.status===`confirmed`)return;let l=de(),u=A(a),d=t||c.suggestedMealType||`lunch`;await l.addFromProposal(c,d,r,u),s[i]=Q({...c,status:`confirmed`}),await j(e,{nutritionProposals:s,nutritionStatus:s.every(e=>e.status===`confirmed`)?`confirmed`:`pending`})}async function pe(e){await j(e,{nutritionStatus:`dismissed`})}return{chats:e,activeChatId:t,messages:n,loading:r,error:i,loadChats:c,loadHistory:b,openChatSession:d,createChat:p,selectChat:_,deleteChat:v,send:P,transcribe:F,confirmNutrition:I,dismissNutrition:pe,updateMessage:j}}),Dt={class:`bottom-nav`,"aria-label":`Основная навигация`},Ot={class:`bottom-nav__surface`},kt={class:`bottom-nav__row`},At={class:`bottom-nav__icon-wrap`},jt={class:`bottom-nav__icon-wrap`},Mt={class:`bottom-nav__icon-wrap`},Nt={class:`bottom-nav__icon-wrap`},Pt=N({__name:`BottomNav`,setup(t){let r=ee(),a=u(),o=Et();function s(e){return e===`/`?r.path===`/`:e===`/settings`?r.path.startsWith(`/settings`):r.path===e}async function l(){await o.openChatSession(),r.path!==`/chat`&&await a.push(`/chat`)}return(t,r)=>{let a=d(`AppIcon`),o=d(`router-link`);return e(),c(`nav`,Dt,[_(`div`,Ot,[r[1]||=_(`svg`,{class:`bottom-nav__shape`,viewBox:`0 0 360 88`,preserveAspectRatio:`none`,"aria-hidden":`true`},[_(`path`,{d:`M0 22C0 9.85 9.85 0 22 0H128C136.5 0 143.5 5.5 147 13.5C158.5 37.5 201.5 37.5 213 13.5C216.5 5.5 223.5 0 232 0H338C350.15 0 360 9.85 360 22V88H0V22Z`,fill:`#fff`})],-1),_(`div`,kt,[i(o,{to:`/`,class:f([`bottom-nav__item`,{"bottom-nav__item--active":s(`/`)}]),"aria-label":`Главная`},{default:n(()=>[_(`span`,At,[i(a,{icon:`lucide:home`,size:20})])]),_:1},8,[`class`]),i(o,{to:`/stats`,class:f([`bottom-nav__item`,{"bottom-nav__item--active":s(`/stats`)}]),"aria-label":`Статистика`},{default:n(()=>[_(`span`,jt,[i(a,{icon:`lucide:bar-chart-3`,size:20})])]),_:1},8,[`class`]),r[0]||=_(`span`,{class:`bottom-nav__spacer`,"aria-hidden":`true`},null,-1),i(o,{to:`/foods`,class:f([`bottom-nav__item`,{"bottom-nav__item--active":s(`/foods`)}]),"aria-label":`Блюда`},{default:n(()=>[_(`span`,Mt,[i(a,{icon:`lucide:apple`,size:20})])]),_:1},8,[`class`]),i(o,{to:`/settings`,class:f([`bottom-nav__item`,{"bottom-nav__item--active":s(`/settings`)}]),"aria-label":`Настройки`},{default:n(()=>[_(`span`,Nt,[i(a,{icon:`lucide:settings`,size:20})])]),_:1},8,[`class`])])]),_(`button`,{type:`button`,class:f([`bottom-nav__fab`,{"bottom-nav__fab--active":s(`/chat`)}]),"aria-label":`Новый чат`,onClick:l},[i(a,{icon:`lucide:plus`,size:28})],2)])}}},[[`__scopeId`,`data-v-6b296cbb`]]),Ft={class:`layout`},It={key:0,class:`layout__header`},Lt={key:1,class:`layout__subheader`},Rt=N({__name:`AppLayout`,props:{title:{type:String,default:`SafeCalorie`},showNav:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},ellipsisTitle:{type:Boolean,default:!1}},setup(t){return(n,i)=>(e(),c(`div`,Ft,[t.showHeader?(e(),c(`header`,It,[_(`h1`,{class:f([`layout__title`,{"layout__title--ellipsis":t.ellipsisTitle}])},l(t.title),3),r(n.$slots,`header`,{},void 0,!0)])):s(``,!0),n.$slots.subheader?(e(),c(`div`,Lt,[r(n.$slots,`subheader`,{},void 0,!0)])):s(``,!0),_(`main`,{class:f([`layout__main`,{"layout__main--with-nav":t.showNav}])},[r(n.$slots,`default`,{},void 0,!0)],2),t.showNav?(e(),o(Pt,{key:2})):s(``,!0)]))}},[[`__scopeId`,`data-v-b2566cf6`]]);export{Et as n,R as r,Rt as t};