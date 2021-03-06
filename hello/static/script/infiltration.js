// @ts-check

function myFunction() {
                
  deleteListItems()
  
  let knightIsAwake = document.getElementById("knightIsAwake").value
  let archerIsAwake = document.getElementById("archerIsAwake").value
  let prisonerIsAwake = document.getElementById("prisonerIsAwake").value
  let petDogIsPresent = document.getElementById("petDogIsPresent").value
  
  const options = []
  
  if(canExecuteFastAttack(knightIsAwake)){
      options.push("You can execute a FAST ATTACK");
  }
  if(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)){
      options.push("You can SPY");
  }
  if(canSignalPrisoner(archerIsAwake, prisonerIsAwake)){
      options.push("You can SIGNAL THE PRISONER");
  }
  if(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)){
      options.push("You can FREE THE PRISONER");
  }
  
  outputOptions(options)
  
}

function deleteListItems() {
  let collection = document.getElementsByClassName("optionListItem")
  while (collection.length > 0) {
      collection.item(0).remove()
  }
}

function outputOptions(options) {
  for (const option of options) {
      let li = document.createElement('li')
      li.innerText = option
      li.setAttribute('class', 'optionListItem')
      document.getElementById('options').append(li)
  }
}

//  * The fast attack is available when the knight is sleeping
function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

//  * A useful spy captures information, which they can't do if everyone's asleep.
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake || archerIsAwake || knightIsAwake
}

//  * You'll get caught by the archer if you signal while they're awake.
function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake
}

//  * The final stage in the plan: freeing Annalyn's best friend.
function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  // With her dog, Annalyn can rescue her friend as long as
  // the archer is asleep -- regardless of what the other's are doing
  const canRescueWithDog = petDogIsPresent && !archerIsAwake
  // Without her dog, both the archer and knight need to be
  // asleep AND her friend needs to be awake.
  const canRescueWithoutDog = !petDogIsPresent && !archerIsAwake && !knightIsAwake && prisonerIsAwake
  // Either work to rescue her friend
  return canRescueWithDog || canRescueWithoutDog
}
