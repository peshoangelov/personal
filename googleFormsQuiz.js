function createMusicEducationQuiz() {
    // Create a new quiz form
    const quiz = FormApp.create('ИЗПИТ ТЕСТ в ДГ_28.05.2023');
    quiz.setIsQuiz(true);
    quiz.setDescription('Факултет „Природни науки и образование"\nКатедра „Български език, литература, история и изкуство"\nДисциплина „Теория и методика на музиката в детската градина"\nПреподавател: ас. д-р Милена Великова');


    const name = quiz.addTextItem();
    name.setTitle('Име и фамилия:')
    .setRequired(true)

    const faculty_number = quiz.addTextItem();
    faculty_number.setTitle('Факултетен номер:')
    .setRequired(true)

    const email = quiz.addTextItem();
    email.setTitle('Имейл:')
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
        .requireTextIsEmail()
        .setHelpText('Моля, въведете валиден имейл адрес.')
        .build());

    const q1a = quiz.addTextItem();
    q1a.setTitle('1а. Към кое от направленията в музикалната психология принадлежи следното твърдение:\n\n"Музикалността е следствие от социалните условия, в които израства личността. Всички деца се раждат с еднакъв природен потенциал, а музикалността изцяло зависят от обучението (и неговите методи)".')
    .setRequired(true)
    .setPoints(8);

    const q1b = quiz.addTextItem();
    q1b.setTitle('1б. Към кое от направленията в музикалната психология принадлежи следното твърдение:\n\n"Музикалността е вродена, унаследена и не се влияе от обучението."')
    .setRequired(true)
    .setPoints(8);
    
    const q1c = quiz.addTextItem();
    q1c.setTitle('1в. Към кое от направленията в музикалната психология принадлежи следното твърдение:\n\n"Музикалността е повлияна от биологичните и социалните фактори. Социалната среда влияе и работи върху това, което човек е получил от природата."')
    .setRequired(true)
    .setPoints(8);

    const q2 = quiz.addTextItem();
    q2.setTitle('2. Избройте трите основни музикални дейности:')
    .setRequired(true)
    .setPoints(25);

    // Question 3: Checkbox question
    const q3 = quiz.addCheckboxItem();
    q3.setTitle('3. Кои от следните педагози свързвате с музикалното възпитание и обучение?')
    .setChoices([
        q3.createChoice('Мария Монтесори'),
        q3.createChoice('Жан Жак Русо'),
        q3.createChoice('Емил Жак-Далкроз', true),
        q3.createChoice('Артур Онегер'),
        q3.createChoice('Золтан Кодай', true),
        q3.createChoice('Карл Роджърс'),
        q3.createChoice('Карл Орф', true)
    ])
    .setRequired(true)
    .setPoints(25);

    // Question 4: Paragraph text
    const q4 = quiz.addParagraphTextItem();
    q4.setTitle('4. Какво е музикалността според Вас и на кое от трите направления в музикалната психология сте привърженик?')
    .setRequired(true)
    .setPoints(25);

    // Question 5: Short answer
    const q5 = quiz.addTextItem();
    q5.setTitle('5. Избройте детски музикални инструменти без определена височина (нефиксирана височина) на тона:')
    .setRequired(true)
    .setPoints(25);

    // Question 6: Short answer
    const q6 = quiz.addTextItem();
    q6.setTitle('6. Избройте детски музикални инструменти с определена височина (с фиксирана височина) на тона:')
    .setRequired(true)
    .setPoints(25);

    // Question 7: Multiple choice
    const q7 = quiz.addMultipleChoiceItem();
    q7.setTitle('7. Методът на кой от изброените педагози е известен като ритмична гимнастика (Евритмика)?')
    .setChoices([
        q7.createChoice('Вероника Коен'),
        q7.createChoice('Карл Орф'),
        q7.createChoice('Емил Жак-Далкроз', true),
        q7.createChoice('Едвин Гордън')
    ])
    .setRequired(true)
    .setPoints(25);

    // Question 8: Checkbox
    const q8 = quiz.addCheckboxItem();
    q8.setTitle('8. Музикално-изпълнителската дейност включва:')
    .setChoices([
        q8.createChoice('дирижиране'),
        q8.createChoice('пеене', true),
        q8.createChoice('танцуване', true),
        q8.createChoice('съчиняване на музика'),
        q8.createChoice('свирене на музикален инструмент', true),
        q8.createChoice('музикално-ритмични движения', true)
    ])
    .setRequired(true)
    .setPoints(25);

    // Question 9: Paragraph text
    const q9 = quiz.addParagraphTextItem();
    q9.setTitle('9. Избройте музикални способности, които се развиват чрез занимания с музикални дейности:')
    .setRequired(true)
    .setPoints(25);

    // Question 10: List of short answers
    const q10 = quiz.addParagraphTextItem();
    q10.setTitle('10. Чрез изразните средства на музиката се осъществява музикалното възпитание.\nКои са изразните средства на музиката?')
    .setRequired(true)
    .setPoints(25);

    // Question 11
    const q11 = quiz.addMultipleChoiceItem();
    q11.setTitle('11. Кой от изброените педагози разработва педагогически подход за улесняване на слушането на музика чрез използването на усещания и изразяване на музиката чрез движение или т.н. "Музикални огледала"? ')
    .setChoices([
        q11.createChoice('Жан-Баптист Люли'),
        q11.createChoice('Клара Кокаш'),
        q11.createChoice('Вероника Коен', true),
        q11.createChoice('Емил Жак-Далкроз')
    ])
    .setRequired(true)
    .setPoints(25);
    
    // Question 12: Short answer
    const q12 = quiz.addCheckboxItem();
    q12.setTitle('12. Кои от изброените са основни ядра в образователно направление „Музика“:')
        .setChoices([
            q12.createChoice('Възприемане', true),
            q12.createChoice('Възпроизвеждане', true),
            q12.createChoice('Игрова двигателна дейност'),
            q12.createChoice('Музика и игра', true),
            q12.createChoice('Елементи на музикалната изразност', true),
            q12.createChoice('Естествено-приложна двигателна дейност'),
            q12.createChoice('Художествено възприемане')
        ])
        .setRequired(true)
        .setPoints(25);

    const q13 = quiz.addCheckboxItem();
    q13.setTitle('13. Вокално-техническото развитие е свързано с изграждане на певчески навици. Кои от изброените са фактори за успешно провеждане на певческа дейност?')
        .setChoices([
            q13.createChoice('Правилна стойка', true),
            q13.createChoice('Дишане', true),
            q13.createChoice('Ранна възраст'),
            q13.createChoice('Звукообразуване', true),
            q13.createChoice('Дикция', true),
            q13.createChoice('Въображение'),
            q13.createChoice('Музикалните инструменти.')
        ])
        .setRequired(true)
        .setPoints(25);

    const q14 = quiz.addMultipleChoiceItem();
    q14.setTitle('14. Кой от изброените подходи на педагогическо взаимодействие е свързан с организация и провеждане на всички дейности в групата, ориентирани към разгръщане на творчески способности на детето в играта, общуването и обучението?')
    .setChoices([
        q14.createChoice('комуникативен подход'),
        q14.createChoice('личностно-ориентиран подход'),
        q14.createChoice('ценностно-ориентиран подход'),
        q14.createChoice('рефлексивен подход'),
        q14.createChoice('експресивен подход'),
        q14.createChoice('творчески подход', true),
        q14.createChoice('ситуационен подход'),
        q14.createChoice('индивидуален подход'),
        q14.createChoice('дейностен подход')
    ])
    .setRequired(true)
    .setPoints(25);

    const q15a = quiz.addParagraphTextItem();
    q15a.setTitle('15а. Споделете пример за междупредметни връзки между направление „Музика“ и направление „Изобразително изкуство“:')
        .setRequired(true)
        .setPoints(6);
    const q15b = quiz.addParagraphTextItem();
    q15b.setTitle('15б. Споделете пример за междупредметни връзки между направление „Музика“ и направление „Български език“:')
        .setRequired(true)
        .setPoints(6);
    const q15c = quiz.addParagraphTextItem();
    q15c.setTitle('15в. Споделете пример за междупредметни връзки между направление „Музика“ и направление „Физическа култура“:')
        .setRequired(true)
        .setPoints(6);
    const q15d = quiz.addParagraphTextItem();
    q15d.setTitle('15г. Споделете пример за междупредметни връзки между направление „Музика“ и направление „Околен свят“:')
        .setRequired(true)
        .setPoints(6);

    const img = UrlFetchApp.fetch('https://files.pesho.net/filebrowser/api/public/dl/Q-rK5fsL/milena_exam/16.png');
    const q16i = quiz.addImageItem();
        q16i.setImage(img)
        q16i.setTitle('Изображение 16.')

    const q16a = quiz.addParagraphTextItem();
    q16a.setTitle('16a. Напишене името на левия нотен ключ от изображение 16:')
    .setRequired(true)
    .setPoints(8);

    const q16b = quiz.addParagraphTextItem();
    q16b.setTitle('16б. Напишене името на средния нотен ключ от изображение 16:')
    .setRequired(true)
    .setPoints(8);

    const q16c = quiz.addParagraphTextItem();
    q16c.setTitle('16в. Напишене името на десния нотен ключ от изображение 16:')
    .setRequired(true)
    .setPoints(8);

    const q17 = quiz.addParagraphTextItem();
    q17.setTitle('17. На колко октавови групи се разделя звукоредът?\nНапишете техните имена:')
    .setRequired(true)
    .setPoints(25);

    const q18 = quiz.addParagraphTextItem();
    q18.setTitle('18. Попълнете пропуснатото понятие:\n“Слоговите наименования на тоновете са въведени от Гвидо д’Арецо във връзка с неговия метод ......................................., като средство за усъвършенстване на нотното пеене. Те представляват началните слогове от първите шест стиха на популярният по онова време химн за Йоан Кръстител.”')
    .setRequired(true)
    .setPoints(25);

    const q19i = quiz.addImageItem();
    q19i.setImage(UrlFetchApp.fetch('https://files.pesho.net/filebrowser/api/public/dl/6w8TypvP/milena_exam/19.png'))
    .setTitle('Изображение 19.')

    const q19 = quiz.addParagraphTextItem();
    q19.setTitle('19. Напишете имената на следните нотни стойности и паузи от ляво на дясно от изображение 19:')
    .setRequired(true)
    .setPoints(25)

    const q20 = quiz.addGridItem();
        q20.setTitle('20. Вярно или грешно е твърдението:')
        q20.setRows(['Четвъртината е равна на две половини',
            'Цялата е равна на четири четвъртини',
            'Четвъртината е равна на две осмини',
            'Половината е равна на три осмини',
            'Половината с точка е равна на три четвъртини'])
        q20.setColumns(['Вярно', 'Грешно'])
        .setRequired(true);


    const q21 = quiz.addCheckboxItem();
    q21.setTitle('21. Какъв вид са изброените темпа:\n\nAllegro, Vivo, Vivace, Presto, Prestissimo?')
    .setChoices([
        q21.createChoice('Бавни темпа'),
        q21.createChoice('Умерени темпа'),
        q21.createChoice('Бързи темпа', true),
    ])
    .setRequired(true)
    .setPoints(25);

    const q22i = quiz.addImageItem();
    q22i.setImage(UrlFetchApp.fetch('https://files.pesho.net/filebrowser/api/public/dl/WeUJ-e7W/milena_exam/22.png'))
    .setTitle('Изображение 22')

    const q22 = quiz.addParagraphTextItem();
    q22.setTitle('22. Каква нотна стойност (една нотна стойност) може да се напише на мястото на въпросителния знак в примерите от изображение 22?')
    .setRequired(true)
    .setPoints(25)
    .setHelpText('\n\nОтговорете с една нотна стойност, например: четвъртина, осмина и т.н.');

    const q23 = quiz.addParagraphTextItem();
    q23.setTitle('23. С кои от изброените знаци се означава тиха и с кои – силна динамика:\n\n      f; mf; pp; fff; mp; p; fp; ppp; pppp; ffff?')
    .setRequired(true)
    .setPoints(25)
    .setHelpText('\n\nЗнаци за тиха динамика: .....,\n Знаци за силна динамика: ....');

    const q24i = quiz.addImageItem();
    q24i.setImage(UrlFetchApp.fetch('https://files.pesho.net/filebrowser/api/public/dl/D7FoWNpF/milena_exam/24.png'))
    q24i.setTitle('Изображение 24.')
    const q24 = quiz.addParagraphTextItem();
    q24.setTitle('24. Избройте елементи от нотната писменост, които виждате в изображение 24.')
    .setRequired(true)
    .setPoints(25);

    const q25i = quiz.addImageItem();
    q25i.setImage(UrlFetchApp.fetch('https://files.pesho.net/filebrowser/api/public/dl/bbQYwY_x/milena_exam/25.png'))
    .setTitle('Изображение 25')

    const q25 = quiz.addParagraphTextItem();
    q25.setTitle('25. Определете какъв е размерът на двата нотни примера от изображение 25?')
    .setRequired(true)
    .setPoints(25);

    const q26 = quiz.addMultipleChoiceItem();
    q26.setTitle('26. Темпата се измерват със специален уред, наречен:')
    .setChoices([
        q26.createChoice('камертон'),
        q26.createChoice('ксилофон'),
        q26.createChoice('метроном', true),
        q26.createChoice('колофон')
    ])
    .setRequired(true)
    .setPoints(25);

    // Question 28: Matching question (simulated with multiple choice)
    const q28 = quiz.addGridItem();
    q28.setTitle('28. Свържете всяко твърдение със съответния отговор:')
    q28.setRows(['Бързината, с която се изпълнява музиката.',
        'Сборът от всички тонове в музикалната система подредени по височина.',
        'Организирано, логично редуване на тонови трайности.',
        'Силата, с която се изпълнява музиката.',
        'Звуковете на речта записваме с букви, а тоновете в музиката записваме с ________ .',
        'Своеобразното звучене на инструмент или глас.',
        'Знак за мълчание в музиката.'
    ])
    q28.setColumns(['Темпо', 'Звукоред', 'Ритъм', 'Динамика', 'Ноти', 'Тембър', 'Пауза'])
    .setRequired(true);

    // Add a confirmation message
    quiz.setConfirmationMessage('Благодарим ви за участието в теста! Резултатите ще бъдат изпратени след проверка.');

    // Log the URL of the published form
    Logger.log('Quiz URL: ' + quiz.getPublishedUrl());
    Logger.log('Edit URL: ' + quiz.getEditUrl());
}