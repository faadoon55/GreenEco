import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plant_diseases } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/Service/imp-api.service';
import { DiseaseInformation } from './disease-info.interface';

@Component({
  selector: 'app-disease-info',
  templateUrl: './disease-info.component.html',
  styleUrls: ['./disease-info.component.scss']
})
export class DiseaseInfoComponent implements OnInit {

information: DiseaseInformation[] = [
  {
  information1: 'مرض اللفحة المتأخرة ينتج عن فطر يصيب أوراق وسيقان وثمار بعض المحاصيل.',
  information2: 'تظهر بقع مائية على الأوراق تتّسع بسرعة ويصبح المظهر قاتمًا أو بنيًا مع تعفن على السيقان.',
  information3: 'يمر المسبب الفطري بفترة كمون في بقايا النبات المصاب ثم ينتشر بالأبواغ مع الرطوبة والحرارة المناسبة.',
  information4: 'الرطوبة العالية ودرجات الحرارة المعتدلة وتجمع المياه على الأوراق تشجع ظهور المرض.',
  information5: 'استخدام أصناف مقاومة وتهوية الحقل وتقليل الري الرذاذي من أهم أساليب الوقاية.',
  information6: 'يعتمد على ملاحظة البقع المميزة وأخذ عينات مخبرية عند الشك.',
  information7: 'استخدام المبيدات الفطرية المناسبة عند ظهور الأعراض المبكرة.',
  information8: 'يؤثر سلبًا على الإنتاج والجودة ويزيد تكلفة المكافحة ويترك بقايا ملوّثة للتربة.',
  information9: 'الحرص على التخلص من بقايا النباتات المصابة وتطبيق خطة رش وقائي مدروس.'
  },
  {
  information1: 'مرض البياض الدقيقي سببه فطر يتكون على هيئة مسحوق أبيض على الأوراق.',
  information2: 'يظهر طلاء أبيض أو رمادي على السطح العلوي والسفلي للأوراق مع تشوه نمو النبات.',
  information3: 'يبدأ الفطر بالتكوين الفطري على الأوراق وينتقل بالأبواغ مع التيارات الهوائية.',
  information4: 'تساهم الرطوبة المعتدلة والازدحام النباتي وضعف التهوية في تفاقم المرض.',
  information5: 'ترك مسافات زراعة مناسبة واستخدام أصناف مقاومة يحد من تفشيه.',
  information6: 'الكشف البصري عن الطبقة البيضاء وتحليل عينات للتأكد من وجود الجراثيم الفطرية.',
  information7: 'الرش بالمبيدات الفطرية الخاصة بالبياض الدقيقي أو استخدام الكبريت الزراعي.',
  information8: 'يؤدي إلى تقليل قدرة النبات على التمثيل الضوئي وخفض الإنتاج على المستوى الواسع.',
  information9: 'تهوية البيوت المحمية وتشذيب الأفرع الزائدة لتخفيض الرطوبة المحيطة.'
  },
  {
  information1: 'مرض البياض الزغبي فطر آخر يسبب بقعًا صفراء على السطح العلوي للأوراق ونموًا زغبيا في الأسفل.',
  information2: 'اصفرار موضعي ثم يتحول إلى بني مع تجعد في الأوراق وتوقف نموها.',
  information3: 'يتكاثر الفطر عبر أبواغ تنتشر بفعل الرياح والرطوبة وتتطلب درجات حرارة معينة.',
  information4: 'التقلبات المناخية وارتفاع الرطوبة وسوء صرف المياه تشجع انتشاره.',
  information5: 'تهوية المزروعات وتحسين الصرف واستخدام المبيدات الوقائية.',
  information6: 'تعتمد على الأعراض المميزة وأخذ عينات مختبرية للتشخيص الدقيق.',
  information7: 'يمكن استخدام المبيدات الفطرية الجهازية ومنع تشبع المياه حول الجذور.',
  information8: 'يتسبب بخسارة كبيرة في المحاصيل الورقية وتحمل التربة ببقايا الأبواغ.',
  information9: 'تجنب الإفراط في الري والتحقق من نوعية المياه وتفادي الازدحام النباتي.'
  },
  {
  information1: 'مرض جرب التفاح يصيب الأوراق والثمار مسببًا بقعًا بنية متشققة.',
  information2: 'تبدأ الأعراض ببقع زيتية على الأوراق تتحول إلى بقع بنية على الثمار وتشوّه شكلها.',
  information3: 'يشتو الفطر على الأوراق المتساقطة ثم ينتشر بالأبواغ عند توفر ظروف الربيع.',
  information4: 'الرطوبة العالية والأمطار المتكررة مع توفر أوراق مصابة يؤدي لانتشار المرض.',
  information5: 'جمع الأوراق المتساقطة وحرقها والتقليم الجيد لزيادة التهوية.',
  information6: 'الملاحظة الحقلية للبقع والفحص المختبري للأبواغ الفطرية.',
  information7: 'الرش بالمبيدات الفطرية الملائمة في المراحل المبكرة من التكون.',
  information8: 'يؤثر على كمية المحصول وتسويقه ويحتاج جهودًا إضافية للفرز والتنظيف.',
  information9: 'استخدام برامج رش وقائي وتجنب ترك مخلفات ملوثة في البستان.'
  },
  {
  information1: 'مرض الصدأ يظهر بشكل بثرات بلون أصفر أو بني على الأوراق والسوق.',
  information2: 'تشكل بثور أو نتوءات صغيرة مملوءة بالأبواغ وتذبل الأوراق المصابة.',
  information3: 'الفطر يتنقل بين عوائل مختلفة ويحتاج لتغير الظروف بين مواسم معينة.',
  information4: 'الرطوبة العالية وانخفاض التهوية في المحصول يحفزان تكوّن البثرات.',
  information5: 'استخدام أصناف مقاومة والتباعد بين خطوط الزراعة للحد من الرطوبة.',
  information6: 'ملاحظة وجود البثرات المميزة وفحص الأنسجة تحت المجهر.',
  information7: 'رش المبيدات الفطرية المناسبة والقص الدوري للأوراق السفلية.',
  information8: 'يخفّض الإنتاجية ويجعل المحصول أقل جودة ويرفع تكلفة الرش.',
  information9: 'إزالة الحشائش المحيطة التي قد تكون عائلًا وسيطًا وتقليل الرطوبة.'
  },
  {
  information1: 'مرض العفن الرمادي يسبب بقعًا رمادية زغبية على الأجزاء الزهرية والثمار.',
  information2: 'يظهر تعفن طري على الثمار المصابة وظهور نمو رمادي غامق.',
  information3: 'يتواجد الفطر في التربة أو بقايا النباتات ويهاجم الأنسجة الضعيفة أولًا.',
  information4: 'ضعف التهوية وارتفاع الرطوبة ودرجات الحرارة الملائمة تفعّل المرض.',
  information5: 'التخلص من الثمار التالفة وتهوية المكان وتجنب البلل الزائد.',
  information6: 'الملاحظة الدقيقة لوجود بقع رمادية وفحص مختبري في حال الالتباس.',
  information7: 'رش مبيدات الفطريات المناسبة وتحسين الظروف البيئية في الدفيئات.',
  information8: 'يسبب خسائر كبيرة في المحاصيل خاصة الفراولة والورود وثمار الخضروات.',
  information9: 'الحرص على تجفيف الأوراق والثمار سريعًا بعد الري أو الأمطار.'
  },
  {
  information1: 'مرض الذبول الوعائي ينتج عن فطريات تهاجم الأوعية الناقلة في الجذر والساق.',
  information2: 'يتجلى باصفرار الأوراق وذبولها رغم توفر الماء وغالبًا يؤدي لموت النبات.',
  information3: 'يخترق الفطر الجذور وينمو في أوعية الخشب مانعًا وصول الماء للأجزاء العلوية.',
  information4: 'التربة الملوثة وضعف المناعة النباتية وسوء الصرف تسرع انتشار الفطر.',
  information5: 'استخدام أصناف مقاومة وتعقيم التربة وزراعة شتلات سليمة.',
  information6: 'تأكيد المرض بفحص مقطع عرضي للساق وتحليل مخبري للعوامل الممرضة.',
  information7: 'لا يوجد علاج جذري غالبًا، ويُستخدم التطعيم بمقاوم أو المبيدات الجهازية الوقائية.',
  information8: 'تقليل الإنتاج وفقد المحصول بأكمله في الحقول المصابة بشدة.',
  information9: 'تدوير المحاصيل وتعقيم المعدات والحفاظ على تربة جيدة الصرف.'
  },
  {
  information1: 'مرض اللفحة النارية يصيب الأشجار المثمرة كالتفاح والإجاص مسببًا احتراق الأزهار والأفرع.',
  information2: 'تبدو الأزهار والأوراق وكأنها محروقة وتموت الأفرع المصابة سريعًا.',
  information3: 'البكتيريا تعيش في قلف الشجرة وتنتشر بالأمطار أو الحشرات إلى الأزهار الجديدة.',
  information4: 'ارتفاع الرطوبة ودرجات الحرارة المعتدلة خلال فترة التزهير تسرع انتشار المرض.',
  information5: 'التقليم الوقائي وإزالة الأفرع المصابة وحرقها وتعقيم الأدوات.',
  information6: 'تعتمد على الأعراض المميزة واختبارات بكتيرية في المختبر.',
  information7: 'استخدام المضادات الحيوية المصرح بها ورش وقائي في فترة الإزهار.',
  information8: 'يؤثر بشدة على إنتاج الفاكهة وقد يقضي على البستان إذا أهمل.',
  information9: 'زراعة أصناف أقل حساسية ومراقبة الأشجار دوريًا لاتخاذ تدابير عاجلة.'
  },
  {
  information1: 'مرض تبرقش الأوراق (فيروسي) يهاجم العديد من الخضروات وأشجار الفاكهة.',
  information2: 'ظهور بقع أو خطوط صفراء أو فاتحة على الأوراق مع تشوه شكل الورقة.',
  information3: 'ينتقل الفيروس عبر نواقل حشرية مثل حشرة المن ويتكاثر داخل أنسجة الورقة.',
  information4: 'كثافة الحشرات الناقلة وضعف العناية بالمزرعة يسرع انتشار الفيروس.',
  information5: 'استخدام أصناف مقاومة والتحكم في الحشرات الناقلة وتنظيف الأدوات.',
  information6: 'الفحص البصري للأوراق وتحليل مخبري للفيروس عند الاشتباه.',
  information7: 'لا يوجد علاج مباشر للفيروس بل التخلص من النباتات المصابة وتقليل انتشار المن.',
  information8: 'انخفاض في جودة المحصول وإنتاجيته وزيادة في تكلفة المكافحة الحشرية.',
  information9: 'تشديد إجراءات الحجر الزراعي وفحص الشتلات قبل زراعتها.'
  },
  {
  information1: 'مرض بقع الأوراق البكتيري يصيب الأوراق بالعديد من المحاصيل مثل الخضروات والبقوليات.',
  information2: 'تظهر بقع مائية صغيرة تتحول إلى بنية أو سوداء وتتسع على سطح الورقة.',
  information3: 'تتكاثر البكتيريا في الأنسجة الرطبة ثم تنتقل عبر قطرات الماء والأدوات الملوثة.',
  information4: 'الحرارة المعتدلة والرطوبة العالية وسوء تهوية الحقل تساعد المرض على التفشي.',
  information5: 'زراعة شتلات سليمة والرش الوقائي ببعض المركبات النحاسية وتقليل الرطوبة.',
  information6: 'ملاحظة البقع المميزة وأخذ عينات مختبرية لفحص البكتيريا.',
  information7: 'إزالة الأوراق المصابة واستخدام المبيدات البكتيرية المعتمدة.',
  information8: 'يقلل من قدرة النبات على التمثيل الضوئي ويسبب خسائر متفاوتة في الإنتاج.',
  information9: 'الري المنظم من أسفل النبات والتخلص السريع من الحشائش المصابة.'
  },
  {
    information1: 'مرض بقع الأوراق السوداء يهاجم الأوراق والسيقان مسببًا بقعًا داكنة.',
    information2: 'تظهر بقع دائرية سوداء أو بنية على الأوراق مع هالة صفراء حولها.',
    information3: 'تعيش الجراثيم في بقايا النبات وتنتشر عبر الرياح أو الرطوبة.',
    information4: 'الرطوبة العالية وسوء التهوية وترك البقايا المصابة يعزز الانتشار.',
    information5: 'التقليم الدوري للأوراق المصابة واستخدام أصناف مقاومة.',
    information6: 'ملاحظة البقع المميزة وفحص العينة مخبريًا للتأكد من هوية المسبب.',
    information7: 'الرش الوقائي بالمبيدات الفطرية المناسبة أو البكتيرية حسب العامل الممرض.',
    information8: 'تقل قدرة النبات على التمثيل الضوئي مما يضعف النمو ويقلل المحصول.',
    information9: 'تنظيف الأرض من المخلفات واتباع دورة زراعية فعالة.'
    },
    {
    information1: 'مرض الأنثراكنوز يسبب تقرحات وبقع غائرة على الأوراق والثمار.',
    information2: 'بقع بنية غامقة أو سوداء تتسع على السطح مع تشقق للأنسجة.',
    information3: 'يشتو الفطر في بقايا المحصول المصاب وينتشر في المواسم الدافئة الرطبة.',
    information4: 'الأمطار المتكررة ودرجات الحرارة المعتدلة مع غياب المكافحة تسهل الانتشار.',
    information5: 'إزالة الثمار المصابة مبكرًا واستخدام أصناف مقاومة للمرض.',
    information6: 'الكشف البصري للبقع الغائرة وفحص مختبري للنمو الفطري للتشخيص.',
    information7: 'استخدام مبيدات فطرية معتمدة وخاصة في بداية تشكل الثمار.',
    information8: 'يؤدي لخسارة جزء كبير من المحصول وتأثير سلبي على قيمة الثمار التسويقية.',
    information9: 'تنظيف الحقل بعد الحصاد وتجنب الري العلوي وقت الظهيرة.'
    },
    {
    information1: 'مرض عفن الجذور يتسبب في تسوّس الأنسجة الجذرية وتعطل امتصاص الماء.',
    information2: 'اصفرار وذبول الأوراق مع سهولة اقتلاع النبات بسبب تهتك الجذر.',
    information3: 'يعيش المسبب في التربة الرطبة وينشط مع زيادة الرطوبة أو سوء الصرف.',
    information4: 'الرطوبة الزائدة وارتفاع منسوب المياه الجوفية وسوء التهوية.',
    information5: 'تحسين الصرف واختيار تربة جيدة التهوية وتقليل الري الزائد.',
    information6: 'تأكيد ذلك باقتلاع عينة من الجذور وملاحظة التعفن أو تحليل مخبري.',
    information7: 'استخدام مبيدات فطرية جهازية وتحسين الظروف البيئية للتربة.',
    information8: 'قد يتسبب في خسائر كبيرة إذا أصاب نسبة عالية من النباتات.',
    information9: 'مراقبة مستويات الرطوبة بانتظام وتعديل أنظمة الري.'
    },
    {
    information1: 'مرض التدرن التاجي يظهر على شكل أورام أو عقد في منطقة التاج والجذور.',
    information2: 'تتورم سيقان النبات عند سطح التربة وتتكون عقد غير منتظمة على الجذور.',
    information3: 'البكتيريا المسببة تدخل عبر الجروح وتتكاثر داخل الأنسجة محدثة أورامًا.',
    information4: 'جروح ناجمة عن أدوات الزراعة أو الحشرات تساعد في الإصابة.',
    information5: 'تعقيم الأدوات واستخدام شتلات سليمة وخلو التربة من البقايا الملوّثة.',
    information6: 'ملاحظة العقد والتورمات وفحص مخبري للبكتيريا في النسيج المصاب.',
    information7: 'لا يوجد علاج جذري؛ يتم اقتلاع النبات المصاب والابتعاد عن زراعته في نفس المكان.',
    information8: 'يعرقل نقل الماء والعناصر الغذائية ويضعف الإنتاج.',
    information9: 'اتباع دورة زراعية وتجنّب إحداث جروح في الجذور أثناء الخدمة.'
    },
    {
    information1: 'مرض التقرح البكتيري يصيب السيقان والفروع مسببًا تقرحات نازفة.',
    information2: 'تشكل بقع بنية أو سوداء خشنة الملمس على القلف مع تسرب مادة صمغية.',
    information3: 'تدخل البكتيريا من الجروح أو التشققات وتنمو داخل الأنسجة الخشبية.',
    information4: 'التغيرات المناخية وغياب التطهير الجيد بعد التقليم يجعل المرض ينتشر.',
    information5: 'تغطية الجروح بمعجون واق وتعقيم الأدوات وعدم تقليم النبات في ظروف رطبة.',
    information6: 'فحص التقرحات وأخذ عينات للتأكد من العامل البكتيري.',
    information7: 'استخدام المضادات البكتيرية وقطع الأفرع المصابة وحرقها.',
    information8: 'قد يؤدي إلى موت الأفرع المصابة وانخفاض النمو العام.',
    information9: 'تجنب الرش بالماء مباشرة على الجذع وتحسين الظروف العامة للنبات.'
    },
    {
    information1: 'مرض اللفحة المبكرة يهاجم الأوراق والسوق وأحيانًا الثمار بشكل بقع بنية مستديرة.',
    information2: 'دوائر بنية داكنة عليها حلقات دائرية متداخلة تشبه الأهداف المتتابعة.',
    information3: 'تتكاثر الجراثيم الفطرية على بقايا المحاصيل وتصيب النباتات الضعيفة أولًا.',
    information4: 'سوء التغذية ونقص العناصر وارتفاع الرطوبة مع الحر يدعم نمو الفطر.',
    information5: 'الحرص على تسميد متوازن وتطبيق الري المناسب وعدم إجهاد النبات.',
    information6: 'يعتمد على الأعراض الدائرية المميزة وتحليل مخبري إن لزم.',
    information7: 'الرش بالمبيدات الفطرية الوقائية مع بداية ملاحظة الأعراض.',
    information8: 'الخسائر في الأوراق تقلل طاقة البناء الضوئي، مما يخفض الإنتاجية.',
    information9: 'إزالة المخلفات المصابة فور الحصاد وتدوير المحصول.'
    },
    {
    information1: 'مرض العفن الأبيض يستهدف الأجزاء القاعدية للساق والجذر ويظهر نمو قطني أبيض.',
    information2: 'ذبول الأوراق وسقوط النبات تدريجيًا مع بروز عفن أبيض زغبي عند قاعدة الساق.',
    information3: 'الفطر يعيش في التربة لفترات طويلة وينشط في ظروف الرطوبة والبرودة المعتدلة.',
    information4: 'الكثافة النباتية العالية ونسبة رطوبة مرتفعة في التربة.',
    information5: 'تقليل الرطوبة والتباعد بين النباتات وتعقيم التربة بالبخار أو بمواد خاصة.',
    information6: 'رؤية النمو القطني على المنطقة القاعدية وفحص مختبري لأقراص الفطر.',
    information7: 'استخدام مبيدات فطرية جهازية محددة وتقليل السقاية المفرطة.',
    information8: 'يتسبب في خسارة النبات بالكامل إذا لم يتم التحكم فيه مبكرًا.',
    information9: 'إدارة دورة زراعية لا تعيد زراعة العائل نفسه في التربة المصابة.'
    },
    {
    information1: 'مرض الاصفرار الفيروسي يصيب الأوراق والسيقان ويجعلها باهتة اللون.',
    information2: 'اصفرار منتظم على عروق الأوراق مع ضعف النمو وتشوه الأنسجة.',
    information3: 'ينتقل الفيروس بواسطة الحشرات الناقلة ويدخل الخلايا النباتية مغيرًا وظائفها.',
    information4: 'الازدحام النباتي وضعف المكافحة الحشرية ووجود أعشاب حاضنة للفيروس.',
    information5: 'استخدام أصناف مقاومة ومكافحة الحشرات وقطع النباتات المصابة.',
    information6: 'الكشف البصري للأعراض والتأكيد بفحوص مخبرية للحمض النووي الفيروسي.',
    information7: 'لا يوجد علاج فيروسي مباشر؛ التخلص من النبات المصاب والسيطرة على الناقل.',
    information8: 'يخفض المحصول بشدة وقد يفقد النبات أوراقه مبكرًا.',
    information9: 'تنظيف البيئة من الحشائش البرية واعتماد برامج مكافحة حشرية دقيقة.'
    },
    {
    information1: 'مرض التخطيط الفيروسي يظهر خطوطًا وبقعًا باهتة على الأوراق والأجزاء الغضة.',
    information2: 'خطوط طولية أو عرضية فاتحة متداخلة مع اللون الطبيعي للورقة.',
    information3: 'يتكاثر الفيروس داخل خلايا النبات وينتشر من نبات لآخر عبر أدوات ملوثة أو الحشرات.',
    information4: 'غياب إجراءات الوقاية وانتشار الحشرات الناقلة وعدم التخلص من النباتات المصابة.',
    information5: 'تعقيم الأدوات قبل التقليم واستخدام شتلات سليمة تمامًا.',
    information6: 'تعتمد على الأعراض المميزة والفحص المختبري في حالة الشك.',
    information7: 'إتلاف النباتات المصابة فورًا لمنع الانتشار وتطبيق المكافحة المتكاملة للناقل.',
    information8: 'تقليل الجودة الإنتاجية وتشوه أوراق النبات وهشاشته.',
    information9: 'برامج الإرشاد الزراعي والفحص الدوري لتجنب تفشي الفيروس.'
    },
    {
    information1: 'مرض شلل القرون يصيب البقوليات مسببًا عجز القرون عن التكون السليم.',
    information2: 'تبدو القرون نحيلة متقزمة أو لا تمتلئ بالبذور مع تشوه الأوراق أحيانًا.',
    information3: 'غالبًا بكتيري أو فيروسي يهاجم أزهار النبات ومبايضها في مرحلة مبكرة.',
    information4: 'الطقس الرطب وقت الإزهار ووجود حشرات ناقلة وازدحام الزراعة.',
    information5: 'التهوية الجيدة والرش الوقائي وقت تفتح الأزهار واختيار أصناف متحملة.',
    information6: 'فحص القرون في بداية نموها واختبارات معملية على العينة المصابة.',
    information7: 'اعتماد المبيدات أو المضادات المناسبة إذا كان السبب بكتيري أو فيروسي مؤكد.',
    information8: 'يؤدي لانخفاض حاد في إنتاج البذور وخسارة العائد الاقتصادي للمحصول.',
    information9: 'مراقبة مرحلة الإزهار بدقة وتطبيق إدارة متكاملة للآفات المسببة.'
    }
  ]


     informationToDisplay: DiseaseInformation = {} as DiseaseInformation;

  constructor(
    private impApiService: ImpApiService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
     // الحصول على قيمة الـ id من البارامتر في الراوت
     let id = this.router.snapshot.params["id"];
     // تأكد من تحويل الـ id إلى رقم إذا لزم الأمر
     id = parseInt(id, 10);

     // جلب المعلومات المناسبة
     this.informationToDisplay = this.getInformationById(id);

     console.log(id)

    this.impApiService.get(plant_diseases.information).subscribe(data => {
      this.information = data.data
    })
  }

   getInformationById(id: number): DiseaseInformation {
      // إذا لم يكن هناك عنصر مطابق
      if (!this.information[id - 1]) {
        // رجّع كائنًا فارغًا أو أعد التوجيه لصفحة خطأ
        return {} as DiseaseInformation;
      }

      return this.information[id - 1];
    }
}
