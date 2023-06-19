import { fetchData } from '$lib/utils/graphHelper';

// Function to get profile by ID
export async function getProfile(id: string): Promise<Profile> {
  const query = `
    query profile($id: ID!) {
      profile(id: $id) {
        id
        name
      }
    }
  `;
  const variables = { id };
  const data = await fetchData<{ profile: Profile }>(query, variables);
  
  if(data && data.profile){
    return data.profile;
  } else {
    return {id: id, name: ""}
  }
}

export async function getPlayerHeroes(id: string): Promise<Hero[]> {
  const query = ` {
      heroes(where: {owner: "${id}"}) {
        id
        firstName
        lastName
        level
        owner {
          id
          name
        }
        statGenes
        visualGenes
        rarity
        shiny
        generation
        mainClassStr
        subClassStr
        professionStr
        strength
        intelligence
        wisdom
        luck
        agility
        vitality
        endurance
        dexterity
        hp
        mp
        stamina
        strengthGrowthP
        intelligenceGrowthP
        wisdomGrowthP
        luckGrowthP
        agilityGrowthP
        vitalityGrowthP
        enduranceGrowthP
        dexterityGrowthP
        strengthGrowthS
        intelligenceGrowthS
        wisdomGrowthS
        luckGrowthS
        agilityGrowthS
        vitalityGrowthS
        enduranceGrowthS
        dexterityGrowthS
        hpSmGrowth
        hpRgGrowth
        hpLgGrowth
        mpSmGrowth
        mpRgGrowth
        mpLgGrowth
        mining
        gardening
        foraging
        fishing
        hasValidCraftingGenes
        mainClass
        subClass
        profession
        passive1
        passive2
        active1
        active2
        statBoost1
        statBoost2
        statsUnknown1
        element
        statsUnknown2
        gender
        headAppendage
        backAppendage
        background
        hairStyle
        hairColor
        visualUnknown1
        eyeColor
        skinColor
        appendageColor
        backAppendageColor
        visualUnknown2
        pjStatus
        pjLevel
      }
    }
  `;

  const data = await fetchData<{ heroes: Hero[] }>(query);
  console.log(data);
  if (data && data.heroes) {
    return data.heroes;
  } else {
    return [];
  }
}
