const up_code= "UP-63277310-1";

const cid = "1032216105.1607125609";

var payload = {
  order: {
    travelers: [
      {
        id: 0,
      },
    ],
    air_reservations: [
      {
        trip_type: "roundtrip",
        itinerary: [
          {
            arrival_apc: "LAS",
            departure_apc: "JFK",
            departure_time: "20221218",
          },
          {
            arrival_apc: "JFK",
            departure_apc: "LAS",
            departure_time: "20221224",
          },
        ],
      },
    ],
    localization: { currency: "USD", language: "en", country: "US" },
    order_amount: 50000, // please note that this is in cents
    up_code: `${up_code}`,
    customer_id: `${cid}`,
  }
};

const apiURL="https://pm-mrkt.prodgw.uplift-platform.com/marketing/v6/from"
const submitAction = async () => {
    price=document.getElementById('priceamount').value;
    console.log(price)
    payload.order.order_amount=price*100;
    console.log(payload);
    var response = await fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify(payload), // string or object
      headers: {
        'Content-Type': 'application/json',
        
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson)


    //Just need to display this value as the per month amount
    console.log(myJson.offer.monthly_payment_amount/100)
    //
    // do something with myJson
  }

console.log(JSON.stringify(payload))
