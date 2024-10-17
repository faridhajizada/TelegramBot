const TelegramBot = require("node-telegram-bot-api");
const token = "7070839105:AAF3NGSl63YQ9o_OFY2jUZ_NAiZuYX-gq_k";

const bot = new TelegramBot(token, { polling: true });

const start = () => {
  bot.on("message", async (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    const text = msg.text;




    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.jpg"
      );
      return bot.sendMessage(chatId, "Xosh gelmisiz Feridin Telegram Botuna!");
    }

    bot.sendMessage(chatId, `Salam ${msg.from.first_name}!`);
    bot.sendMessage(chatId, `Siz ${text} mesajini gonderdiniz!`);

  });
};

start();
