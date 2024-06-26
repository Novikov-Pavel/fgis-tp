import { FormsE, type FormI } from "@/components/Modal/types"

export const dataModals = [
  {
    button: 'Политика конфиденциальности',
    title: 'Политика конфиденциальности',
    body: [
      '1. Общие положения',
      'Настоящая политика составлена в соответствии с требованиями Федерального закона от 27 июля 2006 г. №152-ФЗ «О персональных данных» (далее - Закон о персональных данных), приказа Министерства сельского хозяйства Российской Федерации от 29 июня 2020 г. № 353 «О персональных данных в Министерстве сельского хозяйства Российской Федерации» (далее  – Приказ № 353) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Министерством сельского хозяйства Российской Федерации (далее – Оператор).',
      '1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.',
      '1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о пользователях Федеральной государственной информационной системы в области семеноводства сельскохозяйственных растений (далее – ФГИС «ТП»).',
      '2. Основные понятия, используемые в Политике',
      '2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники.',
      '2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).',
      '2.3. ФГИС «ТП» – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу (https://semena.mcx.ru/), а также на сервере 1С:Предприятия (кластер серверов semena-app-1c,semena-app-1c2,semena-app-1c3, имя информационной базы – SEMENA).',
      '2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств.',
      '2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.',
      '2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.',
      '2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.',
      '2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю ФГИС «ТП».',
      '2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, - персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее - персональные данные, разрешенные для распространения).',
      '2.10. Пользователь – любой пользователь ФГИС «ТП», которому предоставлен доступ путем выдачи учетной записи (логин и пароль).',
      '2.11. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.',
      '2.12. Распространение персональных данных – действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.',
      '2.13. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.',
      '2.14. Уничтожение персональных данных – действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.',
      '3. Основные права и обязанности Оператора',
      '3.1. Оператор имеет право:',
      '– получать от Пользователя достоверные информацию и/или документы, содержащие персональные данные;',
      '– в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;',
      '– самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами',
      '3.2. Оператор обязан:',
      '      – предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;',
      '– организовывать обработку персональных данных в порядке, установленном действующим законодательством Российской Федерации;',
      '– отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;',
      '– сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 10дней с даты получения такого запроса;',
      '– опубликовать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;',
      '– принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;',
      '– прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;',
      '– исполнять иные обязанности, предусмотренные Законом о персональных данных.',
      '4. Основные права и обязанности субъектов персональных данных',
      '4.1. Субъекты персональных данных имеют право:',
      '– получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;',
      '– требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;',
      '– на отзыв согласия на обработку персональных данных;',
      '– обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора при обработке его персональных данных;',
      '– на осуществление иных прав, предусмотренных законодательством Российской Федерации.',
      '4.2. Субъекты персональных данных обязаны:',
      '– предоставлять Оператору достоверные данные о себе;',
      '– сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.',
      '4.3. Лица, передавшие Оператору недостоверные сведения о себе, либо сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с законодательством Российской Федерации.',
      '5. Оператор может обрабатывать следующие персональные данные Пользователя',
      '5.1. Ведется сбор следующих персональных данных:',
      '- фамилия, имя, отчество,',
      '- адрес регистрации,',
      '- идентификационный номер налогоплательщика,',
      '- страховой номер индивидуального лицевого счёта,',
      '- контактный телефон,',
      '- адрес электронной почты,',
      '- место работы (наименование, ИНН работодателя, должность),',
      '- иные персональные данные в соответствии с приложением № 5 к Приказу № 353. ',
      '5.2. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.',
      '5.3. Обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, интимной жизни Оператором не осуществляется.',
      '5.4. Обработка персональных данных, разрешенных для распространения, из числа специальных категорий персональных данных, указанных в части 1 статьи 10 Закона о персональных данных, допускается, если соблюдаются запреты и условия, предусмотренные статьей 10.1 Закона о персональных данных.',
      '5.5. Согласие Пользователя на обработку персональных данных, разрешенных для распространения, оформляется отдельно от других согласий на обработку его персональных данных. При этом соблюдаются условия, предусмотренные, в частности, ст. 10.1 Закона о персональных данных. Требования к содержанию такого согласия устанавливаются уполномоченным органом по защите прав субъектов персональных данных.',
      '5.6. Согласие на обработку персональных данных, разрешенных для распространения, Пользователь предоставляет Оператору посредством ФГИС «ТП» в подписанном виде простой электронной подписью.',
      '5.7. Передача (распространение, предоставление, доступ) персональных данных, разрешенных субъектом персональных данных для распространения, должна быть прекращена в любое время по требованию субъекта персональных данных. Данное требование должно включать в себя фамилию, имя, отчество (при наличии), контактную информацию (номер телефона, адрес электронной почты или почтовый адрес) субъекта персональных данных, а также перечень персональных данных, обработка которых подлежит прекращению. Указанные в данном требовании персональные данные могут обрабатываться только Оператором, которому оно направлено.',
      '5.8. Согласие на обработку персональных данных, разрешенных для распространения, прекращает свое действие с момента поступления Оператору требования, указанного в п. 5.7. настоящей Политики в отношении обработки персональных данных.',
      '6. Принципы обработки персональных данных',
      '6.1. Обработка персональных данных осуществляется на законной и справедливой основе.',
      '6.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.',
      '6.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.',
      '6.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.',
      '6.5. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.',
      '6.6. При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных. Оператор принимает необходимые меры и/или обеспечивает их принятие по удалению или уточнению неполных или неточных данных.',
      '6.7. Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем, по которому является субъект персональных данных. Обрабатываемые персональные данные уничтожаются либо обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.',
      '7. Цели обработки персональных данных',
      '7.1. Цели обработки персональных данных Пользователя:',
      '– информирование Пользователя посредством отправки электронных писем;',
      '– предоставление доступа во ФГИС «ТП»;',
      '– оказания Министерством сельского хозяйства Российской Федерации государственных услуг и осуществления возложенных на Министерство сельского хозяйства Российской Федерации функций.',
      '7.2. Также Оператор имеет право направлять Пользователю уведомления о различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты dit@mcx.gov.ru с пометкой «Отказ от уведомлений о различных событиях».',
      '7.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.',
      '8. Правовые основания обработки персональных данных',
      '8.1. Правовыми основаниями обработки персональных данных Оператором являются:',
      '– договоры, заключаемые между оператором и субъектом персональных данных;',
      '– федеральные законы, иные нормативно-правовые акты в сфере защиты персональных данных;',
      '– согласия Пользователей на обработку их персональных данных, на обработку персональных данных, разрешенных для распространения.',
      '8.2. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные в базе данных ФГИС «ТП» или направленные Оператору посредством электронной почты. Заполняя соответствующие формы, подписывая их посредством простой электронной подписи и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с настоящей Политикой.',
      '8.3. Субъект персональных данных самостоятельно принимает решение о предоставлении его персональных данных и дает согласие свободно, своей волей и в своем интересе.',
      '9. Условия обработки персональных данных',
      '9.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.',
      '9.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей.',
      '9.3. Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве.',
      '9.4. Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем, по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем.',
      '9.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.',
      '9.6. Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее – общедоступные персональные данные).',
      '9.7. Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.',
      '10. Порядок сбора, хранения, передачи и других видов обработки персональных данных',
      '10.1. Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.',
      '10.2. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.',
      '10.3. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.',
      '10.4. В случае выявления неточностей в персональных данных Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора dit@mcx.gov.ru с пометкой «Актуализация персональных данных».',
      '10.5. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим законодательством. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора dit@mcx.gov.ru с пометкой «Отзыв согласия на обработку персональных данных».',
      '10.6. Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Субъект персональных данных и/или Пользователь обязан самостоятельно своевременно ознакомиться с указанными документами. Оператор не несет ответственность за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.',
      '10.7. Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных законодательством РФ.',
      '10.8. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.',
      '10.9. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем, по которому является субъект персональных данных.',
      '10.10. Условием прекращения обработки персональных данных может являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта персональных данных или отзыв согласия субъектом персональных данных, а также выявление неправомерной обработки персональных данных.',
      '11. Перечень действий, производимых Оператором с полученными персональными данными',
      '11.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.',
      '11.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.',
      '12. Трансграничная передача персональных данных',
      '12.1. Трансграничная передача персональных данных, собранных посредством ФГИС «ТП» на территории иностранных государств Оператором не производится.',
      '13. Конфиденциальность персональных данных',
      'Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.',
      '14. Заключительные положения',
      '14.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты dit@mcx.gov.ru.',
      '14.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.',
      '14.3. Актуальная версия Политики в свободном доступе расположена сайте ФГИС «ТП» https://semena.mcx.ru/'
    ]
  },
  {
    button: 'Пользовательское соглашение',
    title: 'СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ',
    body: [
      'Гражданин Российской Федерации, являющийся Пользователем Федеральной государственной информационной системы в области семеноводства сельскохозяйственных растений (далее – Пользователь), дает свое согласие Министерству сельского хозяйства Российской Федерации на обработку, включая любые действия, предусмотренные Федеральным законом от 27 июля 2006 г.№ 152-ФЗ «О персональных данных», в том числе сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных, нижеперечисленных персональных данных:',
      '- фамилия, имя, отчество,',
      '- адрес электронной почты,',
      '- контактный телефон.',
      '	Министерство сельского хозяйства Российской Федерации прилагает все возможные усилия и принимает предусмотренные законодательством Российской Федерации меры для того, чтобы избежать несанкционированного использования персональных данных Пользователя. Пользователь уведомлен о том, что Министерство сельского хозяйства Российской Федерации не несет ответственности за возможное нецелевое использование персональных данных пользователей, произошедшее из-за технических неполадок в программном обеспечении, серверах, компьютерных сетях, находящихся вне контроля Министерства сельского хозяйства Российской Федерации, или в результате противоправных действий третьих лиц, и соглашается с этим.',
      '	Пользователь понимает, что в случае отзыва согласия на обработку персональных данных Министерство сельского хозяйства Российской Федерации вправе продолжить обработку персональных данных без его согласия в соответствии с частью 2 статьи 9, пунктом 4 части 1 статьи 6 Федерального закона от 27 июля 2006 г. № 152-ФЗ «О персональных данных».',
      '	Настоящее согласие на обработку персональных данных действует до дня его отзыва. Для отзыва настоящего согласия Пользователь направляет в Министерство сельского хозяйства Российской Федерации уведомление посредством электронной почты на электронный адрес dit@mcx.gov.ru с пометкой «Отзыв согласия на обработку персональных данных».'
    ]
  }
]

export const forms: Array<FormI> = [
  { id: FormsE.name, type: 'text', placeholder: 'Введите имя', label: 'Имя' },
  { id: FormsE.email, type: 'email', placeholder: 'Введите Email', label: 'Email' },
  { id: FormsE.phone, type: 'tel', placeholder: 'Введите номер телефона', label: 'Телефон' },
  {
    id: FormsE.organization,
    type: 'text',
    placeholder: 'Введите наименование',
    label: 'Наименование организации'
  },
  { id: FormsE.inn, type: 'text', placeholder: 'Введите ИНН', label: 'ИНН организации' },
  { id: FormsE.kpp, type: 'text', placeholder: 'Введите КПП', label: 'КПП организации' },
  {
    id: FormsE.region,
    placeholder: 'Выберите ваш регион',
    label: 'Регион',
    list: [
      { value: '31', label: 'Белгородская область' },
      { value: '32', label: 'Брянская область' },
      { value: '33', label: 'Владимирская область' },
      { value: '36', label: 'Воронежская область' },
      { value: '37', label: 'Ивановская область' },
      { value: '40', label: 'Калужская область' },
      { value: '44', label: 'Костромская область' },
      { value: '46', label: 'Курская область' },
      { value: '48', label: 'Липецкая область' },
      { value: '50', label: 'Московская область' },
      { value: '57', label: 'Орловская область' },
      { value: '62', label: 'Рязанская область' },
      { value: '67', label: 'Смоленская область' },
      { value: '68', label: 'Тамбовская область' },
      { value: '69', label: 'Тверская область' },
      { value: '71', label: 'Тульская область' },
      { value: '76', label: 'Ярославская область' },
      { value: '77', label: 'г. Москва' },
      { value: '10', label: 'Республика Карелия' },
      { value: '11', label: 'Республика Коми' },
      { value: '29', label: 'Архангельская область' },
      { value: '83', label: 'Ненецкий автономный округ' },
      { value: '35', label: 'Вологодская область' },
      { value: '39', label: 'Калининградская область' },
      { value: '47', label: 'Ленинградская область' },
      { value: '51', label: 'Мурманская область' },
      { value: '53', label: 'Новгородская область' },
      { value: '60', label: 'Псковская область' },
      { value: '78', label: 'г. Санкт-Петербург' },
      { value: '01', label: 'Республика Адыгея (Адыгея)' },
      { value: '08', label: 'Республика Калмыкия' },
      { value: '91', label: 'Республика Крым' },
      { value: '23', label: 'Краснодарский край' },
      { value: '30', label: 'Астраханская область' },
      { value: '34', label: 'Волгоградская область' },
      { value: '61', label: 'Ростовская область' },
      { value: '92', label: 'г. Севастополь' },
      { value: '84', label: 'Херсонская область' },
      { value: '85', label: 'Запорожская область' },
      { value: '81', label: 'Луганская Народная Республика' },
      { value: '80', label: 'Донецкая Народная Республика' },
      { value: '05', label: 'Республика Дагестан' },
      { value: '06', label: 'Республика Ингушетия' },
      { value: '07', label: 'Кабардино-Балкарская Республика' },
      { value: '09', label: 'Карачаево-Черкесская Республика' },
      { value: '15', label: 'Республика Северная Осетия - Алания' },
      { value: '20', label: 'Чеченская Республика' },
      { value: '26', label: 'Ставропольский край' },
      { value: '02', label: 'Республика Башкортостан' },
      { value: '12', label: 'Республика Марий Эл' },
      { value: '13', label: 'Республика Мордовия' },
      { value: '16', label: 'Республика Татарстан (Татарстан)' },
      { value: '18', label: 'Удмуртская Республика' },
      { value: '21', label: 'Чувашская Республика - Чувашия' },
      { value: '59', label: 'Пермский край' },
      { value: '43', label: 'Кировская область' },
      { value: '52', label: 'Нижегородская область' },
      { value: '56', label: 'Оренбургская область' },
      { value: '58', label: 'Пензенская область' },
      { value: '63', label: 'Самарская область' },
      { value: '64', label: 'Саратовская область' },
      { value: '73', label: 'Ульяновская область' },
      { value: '45', label: 'Курганская область' },
      { value: '66', label: 'Свердловская область' },
      { value: '72', label: 'Тюменская область' },
      { value: '86', label: 'Ханты-Мансийский автономный округ - Югра' },
      { value: '89', label: 'Ямало-Ненецкий автономный округ' },
      { value: '74', label: 'Челябинская область' },
      { value: '04', label: 'Республика Алтай' },
      { value: '17', label: 'Республика Тыва' },
      { value: '19', label: 'Республика Хакасия' },
      { value: '22', label: 'Алтайский край' },
      { value: '24', label: 'Красноярский край' },
      { value: '38', label: 'Иркутская область' },
      { value: '42', label: 'Кемеровская область' },
      { value: '54', label: 'Новосибирская область' },
      { value: '55', label: 'Омская область' },
      { value: '70', label: 'Томская область' },
      { value: '03', label: 'Республика Бурятия' },
      { value: '75', label: 'Забайкальский край' },
      { value: '14', label: 'Республика Саха (Якутия)' },
      { value: '41', label: 'Камчатский край' },
      { value: '25', label: 'Приморский край' },
      { value: '27', label: 'Хабаровский край' },
      { value: '28', label: 'Амурская область' },
      { value: '49', label: 'Магаданская область' },
      { value: '65', label: 'Сахалинская область' },
      { value: '79', label: 'Еврейская автономная область' },
      { value: '87', label: 'Чукотский автономный округ' }
    ]
  },
  {
    id: FormsE.kindActivity,
    placeholder: 'Выберите вид деятельности',
    label: 'Вид деятельности',
    list: [
      { value: '000000006', label: 'Ввоз/вывоз' },
      { value: '000000007', label: 'Оказание услуг по семеноводству' },
      { value: '000000001', label: 'Селекция' },
      { value: '000000003', label: 'Сельскохозяйственное производство' },
      { value: '000000002', label: 'ТП' },
      { value: '000000005', label: 'Транспортировка' },
      { value: '000000004', label: 'Хранение' }
    ]
  },
  {
    id: FormsE.title,
    type: 'text',
    placeholder: 'Введите тему обращения',
    label: 'Тема обращения'
  },
  {
    id: FormsE.description,
    type: 'textaria',
    placeholder: 'Введите ваше сообщение',
    label: 'Сообщение'
  },
  {
    id: FormsE.dropzoneFile,
    type: 'file',
    label: 'Прикрепить файлы',
    description: { limitFiles: 'Максимум 5 файлов', limitMb: 'Ограничение 20 МБ' }
  }
]
