import type { ActionFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
    const data = await request.json();
    // console.log("Received data:", data);
    // สร้างข้อความส่ง LINE
    const message = data

    // console.log("Sending LINE message:", message);
    const result =  await sendLineMessage(message);

    return result;

}



async function sendLineMessage(message : string) {
  const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_SECRET!;
  const USER_ID = "C3bd9d4382d978f360cbfc5ecef385a21"; //production group id
//   const USER_ID = "C316e6877a8c0cc5b8bad9662a1db3260"; // test group

  

  const result = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: USER_ID,
      messages: [{
        type: "text",
        text : message
      }],
    }),
  });

//   console.log("LINE message sent, response status:", result);
  return result;
}



// async function sendLineMessage(message: string) {
//     const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN!;
//     const USER_ID = "Cd303bc180366567a708e26ec9102cea6"

//     const result = await fetch("https://api.line.me/v2/bot/message/push", {
//         method: "POST",
//         headers: {
//             "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`,
//             "Content-Type": "application/json",

//         },
//         body: JSON.stringify({
//             to: USER_ID,
//             messages: [
//                 {
//                     type: "text",
//                     text: message,
//                 },
//             ],
//         }),
//     });

//     return result
// }
