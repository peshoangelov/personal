function createFormFromJSON() {
    var form = FormApp.getActiveForm();
    
    var jsonData = {
      "title": "Анкета за удовлетвореността на учителите от дигиталните ресурси и платформи",
      "description": "Настоящата анкета има за цел да проучи вашата удовлетвореност от използването на дигитални ресурси и платформи в преподавателската практика.",
      "questions": [
        {
          "question": "В кой образователен етап преподавате?",
          "type": "multiple_choice",
          "options": ["Начален (1-4 клас)", "Прогимназиален (5-7 клас)", "Гимназиален (8-12 клас)", "Друго"]
        },
        {
          "question": "Колко години преподавателски опит имате?",
          "type": "multiple_choice",
          "options": ["По-малко от 1 година", "1-5 години", "6-10 години", "Над 10 години"]
        },
        {
          "question": "Кои дигитални платформи и инструменти използвате най-често?",
          "type": "checkbox",
          "options": [
            "Google Classroom", "Microsoft Teams", "Moodle", "Edmodo", "Schoology",
            "Zoom / Google Meet", "Padlet", "Canva", "Kahoot!", "Quizizz",
            "Mentimeter", "Nearpod", "Pear Deck", "Genially", "Scratch",
            "Tinkercad", "Code.org", "PhET Interactive Simulations", "Duolingo",
            "Quizlet", "StoryJumper", "Project Gutenberg", "LibriVox",
            "StoryWeaver", "Друго"
          ]
        },
        {
          "question": "Колко често използвате дигитални ресурси в учебния процес?",
          "type": "multiple_choice",
          "options": ["Всеки ден", "Няколко пъти седмично", "Веднъж седмично", "По-рядко", "Никога"]
        },
        {
          "question": "Как оценявате полезността на дигиталните инструменти за вашата работа?",
          "type": "scale",
          "scale": { "min": 1, "max": 5, "labels": { "1": "Изобщо не са полезни", "5": "Изключително полезни" } }
        },
        {
          "question": "Какви допълнителни дигитални инструменти бихте искали да използвате в работата си?",
          "type": "short_answer"
        },
        {
          "question": "Какво според вас би могло да се подобри в наличните дигитални платформи?",
          "type": "paragraph"
        },
        {
          "question": "Бихте ли се включили в обучение за по-ефективно използване на дигитални ресурси?",
          "type": "multiple_choice",
          "options": ["Да", "Не", "Зависи от съдържанието на обучението"]
        }
      ]
    };
  
    form.setTitle(jsonData.title);
    form.setDescription(jsonData.description);
  
    jsonData.questions.forEach(q => {
      let item;
      switch (q.type) {
        case "multiple_choice":
          item = form.addMultipleChoiceItem();
          var choices = q.options.map(option => item.createChoice(option));
          item.setTitle(q.question).setChoices(choices);
          break;
        case "checkbox":
          item = form.addCheckboxItem();
          var choices = q.options.map(option => item.createChoice(option));
          item.setTitle(q.question).setChoices(choices);
          break;
        case "scale":
          item = form.addScaleItem();
          item.setTitle(q.question).setBounds(q.scale.min, q.scale.max);
          break;
        case "short_answer":
          item = form.addTextItem();
          item.setTitle(q.question);
          break;
        case "paragraph":
          item = form.addParagraphTextItem();
          item.setTitle(q.question);
          break;
      }
    });
  }