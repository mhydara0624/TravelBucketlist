const db = require('../db')
const { City } = require('../models')

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
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2b/45/9a.jpg'
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
      name: 'Sydney',
      description:
        "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.",
      image:
        'https://www.australia.com/content/australia/en/trips-and-itineraries/sydney-and-surrounds/3-days-in-sydney/_jcr_content/hero/mobile.adapt.768.high.jpg'
    },
    {
      name: 'Lagos',
      description:
        'Lagos, Nigeria’s largest city, sprawls inland from the Gulf of Guinea across Lagos Lagoon. Victoria Island, the financial center of the metropolis, is known for its beach resorts, boutiques and nightlife. To the north, Lagos Island is home to the National Museum Lagos, displaying cultural artifacts and craftworks. Nearby is Freedom Park, once a colonial-era prison and now a major venue for concerts and public events.',
      image:
        'https://wpcdn.zenger.news/wp-content/uploads/2021/07/02112530/210802_N_Nigeria_01.jpg'
    },
    {
      name: 'London',
      description:
        'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city',
      image:
        'https://www.visitbritain.com/sites/default/files/styles/consumer_vertical_hero__1920x1080/public/consumer_components_enhanced/header_image/vb34141644.jpg?itok=3pp7tR6y'
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
