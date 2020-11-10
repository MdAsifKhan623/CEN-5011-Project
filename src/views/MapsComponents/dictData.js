var Dict = require("collections/dict");
const stateDict=new Dict(
    {
    'Florida':'FL',
    'Texas':'TX',
    'New Jersey':'NJ',
    'California':'CA',
    'New York':'NY',
    'Alabama':'AL',
    'Alaska':'AK',
    'Arkansas':'AR',
    'Arizona':'AZ',
    'Colorado':'CO',
    'Connecticut':'CT',
    'Delaware':'DE',
    'District of Columbia':'DC',
    'Georgia':'GA',
    'Hawaii':'HI',
    'Idaho':'ID',
    'Illinois':'IL',
    'Indiana':'IN',
    'Iowa':'IA',
    'Kansas':'KS',
    'Kentucky':'KY',
    'Louisiana':'LA',
    'Maine':'ME',
    'Maryland':'MD',
    'Massachusetts':'MA',
    'Michigan':'MI',
    'Minnesota':'MN',
    'Mississippi':'MS',
    'Missouri':'MO',
    'Montana':'MT',
    'Nebraska':'NE',
    'Nevada':'NV',
    'New Hampshire':'NH',
    'New Mexico':'NM',
    'North Carolina':'NC',
    'North Dakota':'ND',
    'Ohio':'OH',
    'Oklahoma':'OK',
    'Oregon':'OR',
    'Pennsylvania':'PA',
    'Rhode Island':'RI',
    'South Carolina':'SC',
    'South Dakota':'SD',
    'Tennessee':'TN',
    'Utah':'UT',
    'Vermont':'VT',
    'Virginia':'VA',
    'Washington':'WA',
    'West Virginia':'WV',
    'Wisconsin':'WI',
    'Wyoming':'WY'

    })

    const continentDict= new Dict({
        'North America':'NA',
        'Asia':'AS',
        'South America':'SA',
        'Australia/Oceania':'AU',
        'Europe':'EU',
        'Africa':'AF'
    })

    export default stateDict

    export {continentDict}