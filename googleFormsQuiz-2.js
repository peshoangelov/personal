function createMusicEducationQuiz() {
    // Create a new quiz form
    const quiz = FormApp.create('Методика на музикалното възпитание в НУ_ТЕСТ');
    quiz.setIsQuiz(true);
    quiz.setDescription('Факултет „Природни науки и образование"\nКатедра „Български език, литература, история и изкуство"\nДисциплина „Теория и методика на музиката в началното училище"\nПреподавател: гл. ас. д-р Милена Великова');

    const name = quiz.addTextItem();
    name.setTitle('Трите имена:')
    .setRequired(true)

    const faculty_number = quiz.addTextItem();
    faculty_number.setTitle('Факултетен номер:')
    .setRequired(true)

    const email = quiz.addTextItem();
    email.setTitle('Имейл:')
    .setValidation(FormApp.createTextValidation()
        .requireTextIsEmail()
        .setHelpText('Моля, въведете валиден имейл адрес.')
        .build());

    const q1a = quiz.addTextItem();
    q1a.setTitle('1а. С усвояването/ възприемането на кое изразно средство на музиката (мелодия, динамика, темпо, тембър) свързвате с метроритмичен усет?".')
    .setRequired(true)
    .setPoints(6);

    const q1b = quiz.addTextItem();
    q1b.setTitle('1б. С усвояването/ възприемането на кое изразно средство на музиката (мелодия, динамика, темпо, тембър) свързвате с тоновисочинен музикален слух?')
    .setRequired(true)
    .setPoints(6);
    
    const q1c = quiz.addTextItem();
    q1c.setTitle('1в. С усвояването/ възприемането на кое изразно средство на музиката (мелодия, динамика, темпо, тембър) свързвате с метроритмичен усет тембров музикален слух?')
    .setRequired(true)
    .setPoints(6);
    
    const q1d = quiz.addTextItem();
    q1d.setTitle('1г. С усвояването/ възприемането на кое изразно средство на музиката (мелодия, динамика, темпо, тембър) свързвате с динамичен музикален слух?')
    .setRequired(true)
    .setPoints(6);

    const q2 = quiz.addTextItem();
    q2.setTitle('2. Избройте трите основни музикални дейности:')
    .setRequired(true)
    .setPoints(25);

    // Question 3: Checkbox question
    const q3 = quiz.addCheckboxItem();
    q3.setTitle('3. Имената на кои методици и композитори свързвате със съвременните методи и системи за музикално възпитание?')
    .setChoices([
        q3.createChoice('Мария Монтесори'),
        q3.createChoice('Дмитрий Кабалевски'),
        q3.createChoice('Золтан Кодай', true),
        q3.createChoice('Карл Роджърс'),
        q3.createChoice('Карл Орф', true),
        q3.createChoice('Белла Барток', true),
    ])
    .setRequired(true)
    .setPoints(25);

    // Question 4: Paragraph text
    const q4a = quiz.addParagraphTextItem();
    q4a.setTitle('4. Дайте пример за детски музикални инструменти според начина на звукоизвличане (звукообразуване):')
    .setRequired(true)
    .setPoints(25)
    .setHelpText('\n\nударни: _______\nдухови:______\nструнни:______\n\n=========================================================\n');

    const q5 = quiz.addTextItem();
    q5.setTitle('5. Избройте детски музикални инструменти без определена височина (нефиксирана височина) на тона:')
    .setRequired(true)
    .setPoints(25);

    const q6 = quiz.addTextItem();
    q6.setTitle('6. Избройте детски музикални инструменти с определена височина (с фиксирана височина) на тона:')
    .setRequired(true)
    .setPoints(25);

    const q7 = quiz.addParagraphTextItem();
    q7.setTitle('7.Опишете какви занимания включва всяка от основните музикални дейности.')
    .setRequired(true)
    .setPoints(25)
    .setHelpText('\n\n1. Възприемане:_______\n2. Възпроизвеждане:_______\n3. Творчество:_______\n\n==========================================================\n');

    const q8 = quiz.addCheckboxItem();
    q8.setTitle('8. Музикално-изпълнителската дейност включва:')
    .setChoices([
        q8.createChoice('дирижиране'),
        q8.createChoice('пеене', true),
        q8.createChoice('танцуване', true),
        q8.createChoice('съчиняване на музика'),
        q8.createChoice('свирене на музикален инструмент', true),
        q8.createChoice('музикално-ритмични движения', true),
        q8.createChoice('рапиране', true)
    ])
    .setRequired(true)
    .setPoints(25);

    // Question 9: Paragraph text
    const q9 = quiz.addParagraphTextItem();
    q9.setTitle('9. Може ли да се предложи на учениците да съпровождат с избран от тях, музикален инструмент произведението, което слушат? Според вас на какъв етап от запознаване с произведението може да се реализира тази изпълнителска дейност?')
    .setRequired(true)
    .setPoints(25);

    // Question 10: List of short answers
    const q10 = quiz.addParagraphTextItem();
    q10.setTitle('10. Кои са изразните средства на музиката, чрез които се осъществява музикалното възпитание в началното училище?')
    .setRequired(true)
    .setPoints(25);

    // Question 11
    const q11 = quiz.addTextItem();
    q11.setTitle('11. Коя от основните музикални дейности се характеризира като пасивна дейност за учениците?')
    .setRequired(true)
    .setPoints(25);
    
    const q12a = quiz.addTextItem();
    q12a.setTitle('12а. Обяснете в какво се изразява творческата дейност на учениците от начален етап на обучение при възприемане на музика:')
    .setRequired(true)
    .setPoints(8);

    const q12b = quiz.addTextItem();
    q12b.setTitle('12б. Обяснете в какво се изразява творческата дейност на учениците от начален етап на обучение при изпълнение на музика:')
    .setRequired(true)
    .setPoints(8);

    const q12c = quiz.addTextItem();
    q12c.setTitle('12в. Обяснете в какво се изразява творческата дейност на учениците от начален етап на обучение при съчиняване на нови творби:')
    .setRequired(true)
    .setPoints(8);
    
    const q13 = quiz.addParagraphTextItem();
    q13.setTitle('13. Избройте музикални способности, които се развиват чрез занимания с музикални дейности:')
    .setRequired(true)
    .setPoints(25);

    const q14a = quiz.addTextItem();
    q14a.setTitle('14а. Към кое от направленията в музикалната психология принадлежи следното твърдение:\n\n"Музикалността е следствие от социалните условия, в които израства личността. Всички деца се раждат с еднакъв природен потенциал, а музикалността изцяло зависят от обучението (и неговите методи)".')
    .setRequired(true)
    .setPoints(8);

    const q14b = quiz.addTextItem();
    q14b.setTitle('14б. Към кое от направленията в музикалната психология принадлежи следното твърдение:\n\n"Музикалността е вродена, унаследена и не се влияе от обучението."')
    .setRequired(true)
    .setPoints(8);
    
    const q14c = quiz.addTextItem();
    q14c.setTitle('14в. Към кое от направленията в музикалната психология принадлежи следното твърдение:\n\n"Музикалността е повлияна от биологичните и социалните фактори. Социалната среда влияе и работи върху това, което човек е получил от природата."')
    .setRequired(true)
    .setPoints(8);

    const q15 = quiz.addCheckboxItem();
    q15.setTitle('15. За учениците в началното училище са по-достъпни за възприемане музикални произведения:')
    .setChoices([
        q15.createChoice('с текст'),
        q15.createChoice('програмно-изобразителна музика'),
        q15.createChoice('без текст'),
    ])
    .setRequired(true)
    .setPoints(25);

    const q16 = quiz.addCheckboxItem();
    q16.setTitle('16. Вокално-техническото развитие е свързано с изграждане на певчески навици. Кои от изброените са фактори за успешно провеждане на певческа дейност?')
        .setChoices([
            q16.createChoice('Правилна стойка', true),
            q16.createChoice('Дишане', true),
            q16.createChoice('Ранна възраст'),
            q16.createChoice('Звукообразуване', true),
            q16.createChoice('Вокалообразуване'),
            q16.createChoice('Дикция', true),
            q16.createChoice('Въображение'),
            q16.createChoice('Музикалните инструменти.')
        ])
        .setRequired(true)
        .setPoints(25);

    const q17 = quiz.addParagraphTextItem();
    q17.setTitle('17. Опишете в какво се изразява свиренето на музикални инструменти в началното училище:')
    .setRequired(true)
    .setPoints(25);

    const q18 = quiz.addMultipleChoiceItem();
    q18.setTitle("18. Когато учениците участват в музикалния съпровод на песента в клас, свирят предимно на:")
    .setChoices([
        q18.createChoice('Ударни инструменти с неопределен тон (триъгълник, барабанче, кастанети, дайре, клавеси (дървени пръчки), кречетало, бърдуче)', true),
        q18.createChoice('Музикални инструменти с определен тон (пиано, цигулка, клавесин)')
    ])
    .setRequired(true)
    .setPoints(25);

    const q19 = quiz.addParagraphTextItem();
    q19.setTitle('19. Кои са основните области на компетентност (описани в учебните програми по музика), в които се разгръща учебното съдържание и са обособени като очаквани резултати от обучението в края на всеки клас?')
    .setRequired(true)
    .setPoints(25);

    const q20 = quiz.addParagraphTextItem();
    q20.setTitle('20. Обяснете каква е ролята, функцията на знанията в урока по музика. Как се постигат те в процеса на обучение?')
    .setRequired(true)
    .setPoints(25);

    const q21 = quiz.addParagraphTextItem();
    q21.setTitle('21. Трите основни музикални дейности имат ли постоянно разположение в урока по музика? Според Вас в какво съотношение може да се изразява съществуващото разположение?')
    .setRequired(true)
    .setPoints(25);

    const q22 = quiz.addParagraphTextItem();
    q22.setTitle('22. Опишете един урок по музика в началното училище на избрана от вас тема като ползвате следните параметри:')
    .setRequired(true)
    .setPoints(25)
    .setHelpText('\nТема на урока: …………………………………., клас …… \nВид  на урока:\nЦел  на урока:\nЗадачи на урока:\nОчаквани  резултати:\nМетоди на обучение:\nСредства на обучение:\nФорми на обучение:\nМеждупредметни връзки с други дисциплини:\n\n=========================================================\n');

    const q23 = quiz.addParagraphTextItem();
    q23.setTitle('23. Споделете пример за дейности, които могат да се осъществят извън училище във връзка с часовете по наблюдение в изнесена извънучилищна обучаваща среда.')
    .setRequired(true)
    .setPoints(25);

    const q24 = quiz.addParagraphTextItem();
    q24.setTitle('24. Кои са четирите вида уроци, чрез които се осъществява обучението на учениците в начален етап на обучение в общообразователното училище?')
    .setRequired(true)
    .setPoints(25);

    const q25 = quiz.addParagraphTextItem();
    q25.setTitle('25. Споделете пример как ще осъществите междупредметни връзки между дисциплината „Музика“ и следните дисциплини от началния етап на обучение в училище:')
    .setRequired(true)
    .setPoints(25)
    .setHelpText('\n\nМатематика - ____________\nЧужд език - ____________\nИзобразително изкуство - ____________\nБългарски език и литература - ____________\nФизическа култура - ____________\nЧовекът и природата - ____________\nЧовекът и обществото - ____________\nКомпютърно моделиране - ____________\nТехнологии и предприемачество - ____________\n================================================================\n');


    // Add a confirmation message
    quiz.setConfirmationMessage('Благодарим ви за участието в теста! Резултатите ще бъдат изпратени след проверка.');

    // Log the URL of the published form
    Logger.log('Quiz URL: ' + quiz.getPublishedUrl());
    Logger.log('Edit URL: ' + quiz.getEditUrl());
}