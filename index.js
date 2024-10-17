const TelegramBot = require("node-telegram-bot-api");
const token = "7070839105:AAF3NGSl63YQ9o_OFY2jUZ_NAiZuYX-gq_k";

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик для команды /start
const handleStartCommand = async (chatId) => {
  try {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.jpg"
    );
    await bot.sendMessage(chatId, "Xosh gelmisiz Feridin Telegram Botuna!");
  } catch (error) {
    console.error("Error sending /start response:", error);
  }
};

// Основная функция для обработки сообщений
const start = () => {
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    console.log(`Received message: ${text} from ${msg.from.first_name}`);

    if (text === "/start") {
      await handleStartCommand(chatId);
    } else {
      // Ответ на любое другое сообщение
      try {
        await bot.sendMessage(chatId, `Salam ${msg.from.first_name}!`);
        await bot.sendMessage(chatId, `Siz ${text} mesajini gonderdiniz!`);
      } catch (error) {
        console.error("Error responding to user:", error);
      }
    }
  });
};

start();

console.log("Bot is running...");
