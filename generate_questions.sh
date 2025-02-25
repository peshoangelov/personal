for item in "Google Classroom", "Microsoft Teams", "Moodle", "Edmodo", "Schoology", "Zoom / Google Meet", "Padlet", "Canva", "Kahoot!", "Quizizz", "Mentimeter", "Nearpod", "Pear Deck", "Genially", "Scratch", "Tinkercad", "Code.org", "PhET Interactive Simulations", "Duolingo", "Quizlet", "StoryJumper", "Project Gutenberg", "LibriVox", "StoryWeaver", "Друго"; do
   printf "        {
          \"question\": \"Как оценявате полезността на $item за вашата работа?\",
          \"type\": \"scale\",
          \"scale\": { \"min\": 0, \"max\": 5, \"labels\": { \"0\": \"Не се използва\", \"5\": \"Изключително полезни\" } }
        },"

done
