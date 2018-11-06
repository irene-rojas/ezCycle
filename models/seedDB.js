const mongoose = require("mongoose");
const Listing = require("./listing");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ezCycleDB", { useNewUrlParser: true }
  );

const ezCycleSeed = [
    {
        // 1
        name: "Household Hazardous Waste & Electronics Collection (City of Alexandria, VA)",
        address: "3224 Colvin St, Alexandria, VA 22314",
        zipCode: "22314",
        days: "Saturday: 7:30am - 3:30pm (except holidays),\nMonday: 7:30am - 3:30pm (except holidays)",
        url: "https://www.alexandriava.gov/tes/solidwaste/info/default.aspx?id=19206",
        lat: 38.806933,
        long: -77.086211,
        notes: "Proof of residency is required",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true 
    },
    {
        // 2
        name: "Arlington Environmental Collection and Recycling Event (E-CARE)",
        address: "1425 N Quincy St, Arlington, VA 22201",
        zipCode: 22201,
        days: "Nov. 17, 2018: 8:30am - 1:00pm.",
        url: "https://recycling.arlingtonva.us/household-hazmat/e-care/",
        lat: 38.889079,
        long: -77.107540,
        notes: "Proof of residency is required\nCRT fees: televisions - $20 and computer monitors - $15",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 3
        name: "Quarterly Recycling Day (Town of Vienna, VA)",
        address: "600 Mill Street NE, Vienna, VA 22180",
        zipCode: 22180,
        days: "Dec. 1, 2018, 8:00am - 2:00pm",
        url: "https://www.viennava.gov/index.aspx?nid=174",
        lat: 38.910879,
        long: -77.271173,
        notes: "No CRT TVs or screens",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 4
        name: "Turtle Wings",
        address: "3200 Hubbard Rd, Hyattsville, MD 20785",
        zipCode: 20785,
        days: "Mon - Fri: 9:00am - 4:30pm",
        url: "https://turtlewings.com/corporations/recycling/electronics_recycling_dc",
        lat: 38.929781,
        long: -76.873768,
        notes: "CRT fee - $20",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 5
        name: "Forever Green Recycle, Inc.",
        address: "4124 Walney Road, Unit F, Chantilly, VA 20151",
        zipCode: 20151,
        days: "Mon - Fri: 8:00am - 4:00pm\nSat: 10:00am-3:00pm",
        url: "https://www.forevergreenrecycle.com/",
        lat: 38.889562,
        long: -77.434076,
        notes: " ",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true
    },
    {
        name: "Best Buy",
        address: "6555 Frontier Dr, Springfield, VA 22150",
        zipCode: 22150,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.775091,
        long: -77.169664,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 6
        name: "Best Buy",
        address: "5799 Leesburg Pike, Falls Church, VA 22041",
        zipCode: 22041,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.856227,
        long: -77.131091,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 7
        name: "Best Buy",
        address: "3401 Jefferson Davis Hwy, Alexandria, VA 22305",
        zipCode: 22305,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.844998,
        long: -77.050365,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 8
        name: "Best Buy",
        address: "1201 S Hayes St Ste B, Arlington, VA 22202",
        zipCode: 22202,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.861800,
        long: -77.058307,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 9
        name: "Best Buy",
        address: "4500 Wisconsin Ave NW, Washington, DC 20016",
        zipCode: 20016,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.948383,
        long: -77.080347,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 10
        name: "Best Buy",
        address: "3100 14th St NW, Washington, DC 20010",
        zipCode: 20010,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.929167,
        long: -77.033887,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 11
        name: "Best Buy",
        address: "13058 Fair Lakes Shopping Center, Fairfax, VA 22033",
        zipCode: 22033,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.857193,
        long: -77.396105,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 12
        name: "Best Buy",
        address: "2730 Prince William Pkwy, Woodbridge, VA 22192",
        zipCode: 22192,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.652303,
        long: -77.295141,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        crt: false,
        tvLCD: false,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 13
        name: "Staples",
        address: "6731 Frontier Dr, Springfield, VA 22150",
        zipCode: 22150,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.771113,
        long: -77.169849,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 14
        name: "Staples",
        address: "7708 Richmond Hwy, Alexandria, VA 22306",
        zipCode: 22306,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.748795,
        long: -77.088066,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 15
        name: "Staples",
        address: "3301 Jefferson Davis Hwy, Alexandria, VA 22305",
        zipCode: 22305,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.835189,
        long: -77.049597,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 16
        name: "Staples",
        address: "6139 Oxon Hill Rd, Oxon Hill, MD 20745",
        zipCode: 20745,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.806146,
        long: -76.981993,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 17
        name: "Staples",
        address: "3804 Wilson Blvd, Arlington, VA 22203",
        zipCode: 22203,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.880791,
        long: -77.104390,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 18
        name: "Staples",
        address: "5801 Leesburg Pike, Bailey's Crossroads, VA 22041",
        zipCode: 22041,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.854022,
        long: -77.129025,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 19
        name: "I-66 Transfer Station (Fairfax County, VA)",
        address: "4618 West Ox Road, Fairfax, VA, 22030",
        zipCode: 22030,
        days: "Mon - Sat: 8:00am - 4:00pm\nSun: 9:00am - 4:00pm",
        url: "https://www.fairfaxcounty.gov/publicworks/recycling-trash/residential-customer-hours",
        lat: 38.851526,
        long: -77.378154,
        notes: "Limit of ten large items per residential drop-off.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true
    },
    {
        // 20
        name: "I-95 LANDFILL COMPLEX (Fairfax County, VA)",
        address: "9850 Furnace Road, Lorton, VA, 22079",
        zipCode: 22079,
        days: "Mon - Fri: 7:00am - 6:00pm\nSat: 7:00am - 4:00pm\nSun: 7:00am - 4:00pm",
        url: "https://www.fairfaxcounty.gov/publicworks/recycling-trash/residential-customer-hours",
        lat: 38.695950,
        long: -77.241215,
        notes: "Limit of ten large items per residential drop-off.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true
    },
    {
        // 21
        name: "eAsset Solutions, LLC",
        address: "427 N Maple Avenue, Falls Church, VA 22046",
        zipCode: 22046,
        days: "Mon - Sat: 10:00am - 5:00pm",
        url: "https://www.eassetsolutions.com/accepted.php",
        lat: 38.886715,
        long: -77.166254,
        notes: "Flat Monitors - $5.00 per unit\nCRT Monitors(Cathode Ray Tube) - $1.00 per inch of screen\nAll Televisions(CRT/DLP/LCD/LED/OLED/Projection/Plasma) -- $1.00 per inch of screen\nData destruction included on storage devices",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: false
    },
    {
        // 22
        name: "Securis Inc.",
        address: "7383 Washington Blvd #103, Elkridge, MD 21075",
        zipCode: 21075,
        days: "Nov. 10, 2018: 10:00am-2:00pm\nDec. 8, 2018: 10:00am-2:00pm",
        url: "https://www.securis.com/residential/",
        lat: 39.179787,
        long: -76.762369,
        notes: "Monitors – $15.00 Each\nTelevisions, LCD TV’s and Plasmas – 19″ or Smaller $15.00 Each,  20″ to 30” $20.00 Each, 31″ to 50″ $25.00 Each, 51″ or Larger $30.00\nHard Drive, Cell Phone, and Tablet Shredding – $10.00 Each Hard Drive or Cell Phone (while you watch)",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true
    },
    {
        // 23
        name: "Securis Inc.",
        address: "14801 Willard Rd #800, Chantilly, VA 20151",
        zipCode: 20151,
        days: "Nov. 10, 2018: 10:00am-2:00pm\nDec. 8, 2018: 10:00am-2:00pm",
        url: "https://www.securis.com/residential/",
        lat: 38.886861,
        long: -77.459349,
        notes: "Monitors – $15.00 Each\nTelevisions, LCD TV’s and Plasmas – 19″ or Smaller $15.00 Each,  20″ to 30” $20.00 Each, 31″ to 50″ $25.00 Each, 51″ or Larger $30.00\nHard Drive, Cell Phone, and Tablet Shredding – $10.00 Each Hard Drive or Cell Phone (while you watch)",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true
    },
    {
        // 24
        name: "ecoATM",
        address: "6500 Springfield Mall, Springfield, VA 22150",
        zipCode: 22150,
        days: "Daily: 8:00am - 11:30pm",
        url: "https://www.ecoatm.com/how-it-works/",
        lat: 38.774256,
        long: -77.175152,
        notes: "1st Level near JC Penny",
        rechargeableBatteries: false,
        crt: false,
        tvLCD: false,
        computers: false,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 25
        name: "ecoATM",
        address: "1961 Chain Bridge Road, #105, McLean, VA 22102",
        zipCode: 22150,
        days: "Daily: 8:00am - 11:30pm",
        url: "https://www.ecoatm.com/how-it-works/",
        lat: 38.918059,
        long: -77.221548,
        notes: "Near AMC Theaters",
        rechargeableBatteries: false,
        crt: false,
        tvLCD: false,
        computers: false,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 26
        name: "ecoATM",
        address: "2700 Potomac Mills Circle, Woodbridge, VA 22192",
        zipCode: 22192,
        days: "Daily: 8:00am - 11:30pm",
        url: "https://www.ecoatm.com/how-it-works/",
        lat: 38.643551,
        long: -77.295376,
        notes: "Near Burlington Coat Factory",
        rechargeableBatteries: false,
        crt: false,
        tvLCD: false,
        computers: false,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 27
        name: "ecoATM",
        address: "14000 Worth Ave, Woodbridge, VA 22192",
        zipCode: 22192,
        days: "Daily: 8:00am - 11:30pm",
        url: "https://www.ecoatm.com/how-it-works/",
        lat: 38.648839,
        long: -77.297105,
        notes: "Inside Walmart near GMV exit vestibule",
        rechargeableBatteries: false,
        crt: false,
        tvLCD: false,
        computers: false,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    },
    {
        // 28
        name: "ecoATM",
        address: "11750 Fair Oaks Mall, Fairfax, VA 22033",
        zipCode: 22033,
        days: "Daily: 8:00am - 11:30pm",
        url: "https://www.ecoatm.com/how-it-works/",
        lat: 38.862857,
        long: -77.358770,
        notes: "Near Teavana and AT&T",
        rechargeableBatteries: false,
        crt: false,
        tvLCD: false,
        computers: false,
        tabletsPhones: true,
        wires: false,
        homeAppliances: false
    }
];

Listing
  .remove({})
  .then(() => Listing.insertMany(ezCycleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });