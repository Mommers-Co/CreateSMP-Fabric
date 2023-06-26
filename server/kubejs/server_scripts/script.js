// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')


ServerEvents.recipes(event => {
	// Change recipes here

	event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will part of the scrap
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:shaft').withChance(2.0),
		Item.of('create:crushed_gold_ore').withChance(2.0)
	],'create:golden_sheet',[ // 'create:golden_sheet' is the input
		// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:cogwheel']),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:large_cogwheel']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','minecraft:iron_nugget'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(5) // set the transitional item and the loops (amount of repetitions)

	event.recipes.create.crushing(['minecraft:sand', Item.of('createoreexcavation:raw_diamond').withChance(0.01),  Item.of('minecraft:gold_nugget').withChance(0.25)], 'minecraft:sand').processingTime(300);

})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})