const { hero,spell,item,player, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
//CREATE

const createNewHero = async () => {

    const nHero = await hero.create({
        name: 'Anti_Mage',
        primary_attribute: 'agility',
        strength: 20,
        agility: 20,
        intelligence: 23,
        attack_min: 44,
        attack_max: 54,
        spell1: 'mana_break',
        spell2: 'blink',
        spell3: 'counter_spell',
        spell4: 'mana_void',
        createdAt: new Date(),
        updatedAt: new Date()
    });
}
const createNewItem = async () => {

    const nItem = await item.create({
        name: 'Quelling Blade3',
        description: 'Cuts a tree and adds attack damage.',
        gold_cost: 100,
        mana_cost: 999,
        strength: 0,
        agility: 0,
        intelligence: 0,
        createdAt: new Date(),
        updatedAt: new Date()
  
    });
}
const createNewSpell = async () => {
    const nSpell = await spell.create({
        name: 'unstable_concoction2',
        damage: 150,
        damage_type: 'physical',
        ability_type: 'Point Target',
        mana_cost: 100,
        cooldown: 13,
        cast_range: 400,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    console.log('finish')
}
const createNewPlayer = async () => {

    const nPlayer = await player.create({
        name: 'BigCash',
        hero_id: 4,
        item1_id: 1,
        item2_id: 1,
        item3_id: 1,
        item4_id: 1,
        item5_id: 1,
        item6_id: 1,
        gold: 10000,
        health: 1300,
        createdAt: new Date(),
        updatedAt: new Date()
  
    });
}
//READ
const findAllHeros = async () => {
    const heros = await hero.findAll();
    console.log(heros)   
  // Find all users
  // Raw SQL: SELECT * FROM users;
}
const findAllPlayers = async () => {
    const players = await player.findAll();
    console.log(players)   
  // Find all users
  // Raw SQL: SELECT * FROM users;
}
const findAllItems = async () => {
    const item = await item.findAll();
    console.log(item)   
  // Find all users
  // Raw SQL: SELECT * FROM users;
}
const findAllSpells = async () => {
    const spells = await spell.findAll();
    console.log(spells)   
  // Find all users
  // Raw SQL: SELECT * FROM users;
}
//UPDATE
const updateHeroName = async () => {
    const heroNameUp = await hero.update(
        { name:"chilly_boi" },
        { where: { id: 6 } 
      }
    )
    console.log(userUpdate)
  }
  const updateItemName = async () => {
    const itemNameUp = await item.update(
        { name:"Updated Item" },
        { where: { name: "Quelling Blade3" } 
      }
    )
    console.log(userUpdate)
  }
  const updateSpellName = async () => {
    const spellNameUp = await spell.update(
        { name:"big_bomb_update" },
        { where: { name: "unstable_concoction2" } 
      }
    )
    console.log(userUpdate)
  }
  const updatePlayerName = async () => {
    const playerNameUp = await player.update(
        { name:"lil cash" },
        { where: { name: "BigCash" } 
      }
    )
    console.log(userUpdate)
  }

//Delete
const deleteHero = async () => {

    const heroDeleteByName = await hero.destroy({where:{name:'chilly_boi'}});
    console.log(byeJane)
  }
  const deleteItem = async () => {

    const itemDeleteByName = await item.destroy({where:{name:'Updated Item'}});
    console.log(byeJane)
  }
  const deleteSpell = async () => {

    const spellDeleteByName = await spell.destroy({where:{name:'big_bomb_update'}});
    console.log(byeJane)
  }
  const deletePlayer = async () => {

    const playerDeleteByName = await player.destroy({where:{name:'lil cash'}});
    console.log(byeJane)
  }


const run = async () => {
    try {
        // await createNewSpell()
        // await createNewHero()
        // await createNewItem()
        // await createNewPlayer()
        // await findAllHeros()
        // await findAllPlayers()
        // await findAllItems()
        // await findAllSpells()
        // await updateHeroName()
        // await updateItemName()
        // await updateSpellName()
        // await updatePlayerName()
        // await deleteHero()
        // await deleteItem()
        // await deleteSpell()
        await deletePlayer()


        console.log('part 1')

    } catch (error) {
    } finally {
      await sequelize.close()
    }
  }
  console.log('before run')
  
  run()