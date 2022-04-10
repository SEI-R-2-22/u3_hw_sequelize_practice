
#sequelize model:generate --name hero --attributes name:string,primary_attribute:string,strength:integer,agility:integer,intelligence:integer,attack_min:integer,attack_max:integer,spell1:string,spell2:string,spell3:string,spell4:string,spell5:string,spell6:string


#sequelize model:generate --name spell --attributes name:string,damage:integer,damage_type:string,spell_type:string,mana_cost:integer,strength:integer,agility:integer,intelligence:integer

sequelize model:generate --name item --attributes name:string,description:string,damage:integer,damage_type:string,gold_cost:integer,mana_cost:integer,strength:integer,agility:integer,intelligence:integer

#sequelize model:generate --name player --attributes name:string,hero_id:integer,item1_id:integer,item2_id:integer,item3_id:integer,item4_id:integer,item5_id:integer,item6_id:integer,gold:integer,health:integer,mana:integer