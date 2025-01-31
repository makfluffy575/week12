const list = document.getElementById("ol");

      const showVariables = (x) => {
        const listItem = document.createElement("li");
        list.append(listItem);
        return (listItem.innerText = x);
      };

      const txt =
        "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.";

      //1
      console.log(`1. Количество символов в тексте: ${txt.length}`);

      // console.log(showVariables(txt.length));

      showVariables(txt.length);

      //2
      const result = txt.replaceAll(`;`, `;\n`);
      console.log(`2. Текст с переносами строк: ${result}`);

      showVariables(result);

      //3
      const substring = result.replaceAll(" ", "");
      console.log(`3. Текст с удалёнными пробелами: ${substring}`);

      showVariables(substring);

      //4
      const newText = result.substring(27, 50);
      console.log(`4. Извлечение подстроки: ${newText}`);

      showVariables(newText);

      //5
      const replacedText = newText.replace("клён", "дубе");
      console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

      // showVariables(replacedText);

      //6
      const replacedText2 = result.toUpperCase();
      console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

      showVariables(replacedText2);

      //7
      const replacedText3 = result.replace(/клён/g, "дуб");
      console.log(
        `5. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`
      );

      showVariables(replacedText3);

      //8
      const index = txt.indexOf("моря");
      console.log(`8. Индекс первого вхождения "моря": ${index}`);

      showVariables(index);

      //9

      const firstLetter = replacedText[0];

      const modifiedText =
        firstLetter.toUpperCase() + replacedText.slice(1, replacedText.length);

      console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

      showVariables(modifiedText);