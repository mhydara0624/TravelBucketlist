const db = require('../db')
const City = require('../models/city')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cities = [
    {
      name: 'Miami',
      description:
        'Miami, officially the City of Miami, is a coastal metropolis located in Miami-Dade County in southeastern Florida, United States. It is the forty second largest city in the United States..',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Miami%2C_Florida_June_2021_-_Paramount.jpg/640px-Miami%2C_Florida_June_2021_-_Paramount.jpg'
    },
    {
      name: 'New York City',
      description:
        'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square..',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/640px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg'
    },
    {
      name: 'Shanghai',
      description:
        "Shanghai, on China’s central coast, is the country's biggest city and a global financial hub. Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings. Across the Huangpu River rises the Pudong district’s futuristic skyline, including 632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres. Sprawling Yu Garden has traditional pavilions, towers and ponds",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/640px-Pudong_Shanghai_November_2017_panorama.jpg'
    },
    {
      name: 'Tokyo',
      description:
        "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Buildings_with_colorful_neon_street_signs_at_blue_hour%2C_Shinjuku%2C_Tokyo.jpg/640px-Buildings_with_colorful_neon_street_signs_at_blue_hour%2C_Shinjuku%2C_Tokyo.jpg'
    },
    {
      name: 'Paris',
      description:
        "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eiffel_tower_from_trocadero.jpg/640px-Eiffel_tower_from_trocadero.jpg'
    },
    {
      name: 'Cairo',
      description:
        'Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/1280px-Ficus_benjamina2.jphttps://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Egypt%2C_Cairo%2C_Panorama_of_Islamic_Cairo%2C_also_Medieval_Cairo.jpg/640px-Egypt%2C_Cairo%2C_Panorama_of_Islamic_Cairo%2C_also_Medieval_Cairo.jpg'
    },
    {
      name: 'Tulum',
      description:
        'Tulum is a town on the Caribbean coastline of Mexico’s Yucatán Peninsula. It’s known for its beaches and well-preserved ruins of an ancient Mayan port city. The main building is a large stone structure called El Castillo (castle), perched on a rocky cliff above the white sand beach and turquoise sea. Near the ruins is the Parque Nacional Tulum, a coastal area with mangroves and cenotes (natural limestone sinkholes).',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Tulum_-_01.jpg/640px-Tulum_-_01.jpg'
    },
    {
      name: 'Rio de Janeiro',
      description:
        'Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rio_de_Janeiro_barra.jpg/640px-Rio_de_Janeiro_barra.jpg'
    },
    {
      name: 'Dubai',
      description:
        'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Dubai_marina2.jpg/640px-Dubai_marina2.jpg'
    },
    {
      name: 'Konoha',
      description:
        "Konohagakure (木ノ葉隠れの里, Konohagakure no Sato; literally meaning 'Hidden Leaf Village'; is the hidden village of the Land of Fire. As the village of one of the Five Great Shinobi Countries, Konohagakure has a Kage as its leader, known as the Hokage. On a mountain overlooking the village from the north exists the Hokage Monument which has the faces of all those who have taken the office of Hokage engraved on it. The shinobi of this village wear blue or black shirts which may or may not have swirl patterns on the shoulders, along with matching coloured pants over a green flak jacket which also has a red swirl on the back, and pockets on the chest area.",
      image:
        'https://static.wikia.nocookie.net/the-naruto-world/images/b/b1/Konohavillage.jpg/revision/latest?cb=20130422204914'
    }
  ]

  await City.insertMany(cities)
  console.log('Created some cities!')
}
const run = async () => {
  await main()
  db.close()
}

run()
