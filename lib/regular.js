var regular={       var1:{re:/<g id="konv_x0020_konv([0-9]{1,})">/g, change:'<g class="konv konv$1">'},
                    var2:{re:/id="konv([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="konv$1 '},
                    var3:{re:/id="konv([0-9]{1,})manual[_]{0,}[0-9]{0,}" class="/g, change:'class="konv$1manual '},
                    var4:{re:/id="konv([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="konv$1select '},

                    var5:{re:/<g id="zadvijka_x0020_zadvijka([0-9]{1,})">/g, change:'<g class="zadvijka zadvijka$1">'},
                    var6:{re:/id="zadvijka([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="zadvijka$1 '},
                    var7:{re:/id="zadvijka([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="zadvijka$1select '},
                    var8:{re:/id="zadvijka([0-9]{1,})select.*" class="/g, change:'class="zadvijka$1select '},

                    var9:{re:/<g id="klapan_x0020_klapan([0-9]{1,})">/g, change:'<g class="klapan klapan$1">'},
                    var10:{re:/id="klapan([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="klapan$1 '},
                    var11:{re:/id="klapan([0-9]{1,})_x0020_left[_]{0,}[0-9]{0,}" class="/g, change:'class="klapan$1 left '},
                    var12:{re:/id="klapan([0-9]{1,})_x0020_right[_]{0,}[0-9]{0,}" class="/g, change:'class="klapan$1 right '},
                    var13:{re:/id="klapan([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="klapan$1select '},
                    var14:{re:/id="klapan([0-9]{1,})select.*" class="/g, change:'class="klapan$1select '},

                    var15:{re:/<g id="vent_x0020_vent([0-9]{1,})">/g, change:'<g class="vent vent$1">'},
                    var16:{re:/id="vent([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="vent$1 '},
                    var17:{re:/id="vent([0-9]{1,})manual[_]{0,}[0-9]{0,}" class="/g, change:'class="vent$1manual '},
                    var18:{re:/id="vent([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="vent$1select '},
                    var19:{re:/id="vent([0-9]{1,})select.*" class="/g, change:'class="vent$1select '},

                    var20:{re:/<g id="silos([0-9]{1,})">/g, change:'<g class="silos silos$1">'},
                    var21:{re:/<g id="silos_x0020_silos([0-9]{1,})">/g, change:'<g class="silos silos$1">'},
                    var22:{re:/id="silos([0-9]{1,})_x0020_mark_lower[_]{0,}[0-9]{0,}" class="/g, change:'class="silos$1mark_lower '},
                    var23:{re:/id="silos([0-9]{1,})_x0020_mark_lower.*" class="/g, change:'class="silos$1mark_lower '},
                    var24:{re:/id="silos([0-9]{1,})_x0020_mark_middle[_]{0,}[0-9]{0,}" class="/g, change:'class="silos$1mark_middle '},
                    var25:{re:/id="silos([0-9]{1,})_x0020_mark_middle.*" class="/g, change:'class="silos$1mark_middle '},
                    var26:{re:/id="silos([0-9]{1,})_x0020_mark_upper[_]{0,}[0-9]{0,}" class="/g, change:'class="silos$mark_upper '},
                    var27:{re:/id="silos([0-9]{1,})_x0020_mark_upper.*" class="/g, change:'class="silos$1mark_upper '},
                    var28:{re:/id="silos([0-9]{1,})mark_lower[_]{0,}[0-9]{0,}" class="/g, change:'class="silos$1mark_lower '},
                    var29:{re:/id="silos([0-9]{1,})mark_lower.*" class="/g, change:'class="silos$1mark_lower '},
                    var30:{re:/id="silos([0-9]{1,})mark_middle[_]{0,}[0-9]{0,}" class="/g, change:'class="silos$1mark_middle '},
                    var31:{re:/id="silos([0-9]{1,})mark_middle.*" class="/g, change:'class="silos$1mark_middle '},
                    var32:{re:/id="silos([0-9]{1,})mark_upper[_]{0,}[0-9]{0,}" class="/g, change:'class="silos$1mark_upper '},
                    var33:{re:/id="silos([0-9]{1,})mark_upper.*" class="/g, change:'class="silos$1mark_upper '},
                    var34:{re:/id="silos([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="silos$1select '},
                    var35:{re:/id="silos([0-9]{1,})select.*" class="/g, change:'class="silos$1select '},

                    var36:{re:/<g id="gate_x0020_gate([0-9]{1,})">/g, change:'<g class="gate gate$1">'},
                    var37:{re:/id="gate([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="gate$1 '},
                    var38:{re:/id="gate([0-9]{1,})manual[_]{0,}[0-9]{0,}" class="/g, change:'class="gate$1manual '},
                    var39:{re:/id="gate([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="gate$1select '},
                    var40:{re:/id="gate([0-9]{1,})select.*" class="/g, change:'class="gate$1select '},

                    var41:{re:/<g id="cyclone_x0020_cyclone([0-9]{1,})">/g, change:'<g class="cyclone cyclone$1">'},
                    var42:{re:/id="cyclone([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="cyclone$1 '},
                    var43:{re:/id="cyclone([0-9]{1,})manual[_]{0,}[0-9]{0,}" class="/g, change:'class="cyclone$1manual '},
                    var44:{re:/id="cyclone([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="cyclone$1select '},
                    var45:{re:/id="cyclone([0-9]{1,})select.*" class="/g, change:'class="cyclone$1select '},

                    var46:{re:/<g id="nor_x0020_nor([0-9]{1,})">/g, change:'<g class="nor nor$1">'},
                    var47:{re:/id="nor([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="nor$1 '},
                    var48:{re:/id="nor([0-9]{1,})manual[_]{0,}[0-9]{0,}" class="/g, change:'class="nor$1manual '},
                    var49:{re:/id="nor([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="nor$1select '},

                    var50:{re:/id="iconreceiver_x0020_iconreceiver([0-9]{1,})" class="/g, change:'class="iconreceiver iconreceiver$1 '},
                    var51:{re:/id="iconsource_x0020_iconsource([0-9]{1,})" class="/g, change:'class="iconsource iconsource$1 '},

                    var52:{re:/<g id="receiver_x0020_receiver([0-9]{1,})">/g, change:'<g class="receiver receiver$1">'},
                    var53:{re:/<g id="source_x0020_source([0-9]{1,})">/g, change:'<g class="source source$1">'},
                    var54:{re:/<g id="source_x0020_source([0-9]{1,})_x0020_receiver_x0020_receiver([0-9]{1,})">/g, change:'<g class="source source$1 receiver receiver$1">'},

                    var55:{re:/<g id="icon_x0020_remont([0-9]{1,})">/g, change:'<g class="icon remont$1">'},
                    var56:{re:/<g id="icon_x0020_attention([0-9]{1,})">/g, change:'<g class="icon attention$1">'},

                    var57:{re:/<g id="current_x0020_currentLable([0-9]{1,})">/g, change:'<g class="current currentLable$1">'},
                    var58:{re:/id="current([0-9]{1,})fon[_]{0,}[0-9]{0,}" class="/g, change:'class="current$1fon '},
                    var59:{re:/id="current([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="current$1 '},

                    var60:{re:/<g id="kylt_x0020_kylt([0-9]{1,})">/g, change:'<g class="kylt lablekylt$1">'},
                    var61:{re:/id="kylt([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="kylt$1 '},


                    var62:{re:/id="textsourcereceive([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="textsourcereceiver$1 '},
                    var63:{re:/id="textsourcereceiver([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="textsourcereceiver$1 '},

                    var64:{re:/<g id="enable_x0020_enable([0-9]{1,})">/g, change:'<g class="enable enable$1">'},
                    var65:{re:/id="enable([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="enable$1 '},
                    var66:{re:/id="enable([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="enable$1select '},
                    var67:{re:/id="enable([0-9]{1,})select.*" class="/g, change:'class="enable$1select '},

                    var68:{re:/<g id="car_x0020_car([0-9]{1,})">/g, change:'<g class="car car$1">'},

                    var69:{re:/<g id="dryer([0-9]{1,})">/g, change:'<g class="dryer dryer$1">'},
                    var70:{re:/<g id="dryer_x0020_dryer([0-9]{1,})">/g, change:'<g class="dryer dryer$1">'},
                    var71:{re:/id="dryer([0-9]{1,})_x0020_mark_lower[_]{0,}[0-9]{0,}" class="/g, change:'class="dryer$1mark_lower '},
                    var72:{re:/id="dryer([0-9]{1,})_x0020_mark_lower.*" class="/g, change:'class="dryer$1mark_lower '},
                    var73:{re:/id="dryer([0-9]{1,})_x0020_mark_middle[_]{0,}[0-9]{0,}" class="/g, change:'class="dryer$1mark_middle '},
                    var74:{re:/id="dryer([0-9]{1,})_x0020_mark_middle.*" class="/g, change:'class="dryer$1mark_middle '},
                    var75:{re:/id="dryer([0-9]{1,})_x0020_mark_upper[_]{0,}[0-9]{0,}" class="/g, change:'class="dryer$1mark_upper '},
                    var76:{re:/id="dryer([0-9]{1,})_x0020_mark_upper.*" class="/g, change:'class="dryer$1mark_upper '},
                    var77:{re:/id="dryer([0-9]{1,})mark_lower[_]{0,}[0-9]{0,}" class="/g, change:'class="dryer$1mark_lower '},
                    var78:{re:/id="dryer([0-9]{1,})mark_lower.*" class="/g, change:'class="dryer$1mark_lower '},
                    var79:{re:/id="dryer([0-9]{1,})mark_middle[_]{0,}[0-9]{0,}" class="/g, change:'class="dryer$1mark_middle '},
                    var80:{re:/id="dryer([0-9]{1,})mark_middle.*" class="/g, change:'class="dryer$1mark_middle '},
                    var81:{re:/id="dryer([0-9]{1,})mark_upper[_]{0,}[0-9]{0,}" class="/g, change:'class="dryer$1mark_upper '},
                    var82:{re:/id="dryer([0-9]{1,})mark_upper.*" class="/g, change:'class="dryer$1mark_upper '},
                    var83:{re:/id="dryer([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="dryer$1select '},
                    var84:{re:/id="dryer([0-9]{1,})select.*" class="/g, change:'class="dryer$1select '},

                    var85:{re:/id="line_x0020_line([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="line line$1 '},
                    var86:{re:/id="line_x0020_line([0-9]{1,})_x0020_line([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="line line$1 line$2 '},
                    var87:{re:/id="line_x0020_line([0-9]{1,})_x0020_line([0-9]{1,})_x0020_line([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="line line$1 line$2 line$3 '},
                    var88:{re:/id="line_x0020_line([0-9]{1,})_x0020_line([0-9]{1,})_x0020_line([0-9]{1,})_x0020_line([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="line line$1 line$2 line$3 line$4 '},

                    var89:{re:/<g id="separator_x0020_separator([0-9]{1,})">/g, change:'<g class="separator separator$1">'},
                    var90:{re:/id="separator([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="separator$1 '},
                    var91:{re:/id="separator([0-9]{1,})manual[_]{0,}[0-9]{0,}" class="/g, change:'class="separator$1manual '},
                    var92:{re:/id="separator([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="separator$1select '},
                    var93:{re:/id="separator([0-9]{1,})select.*" class="/g, change:'class="separator$1select '},
                    //преобразование поворотной трубы
                    var94:{re:/<g id="tube_x0020_tube([0-9]{1,})">/g, change:'<g class="tube tube$1">'},
                    var95:{re:/id="tube([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="tube$1 '},
                    var96:{re:/id="tube([0-9]{1,})manual[_]{0,}[0-9]{0,}" class="/g, change:'class="tube$1manual '},
                    var97:{re:/id="tube([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="tube$1select '},
                    var98:{re:/id="tube([0-9]{1,})select.*" class="/g, change:'class="tube$1select '},
                    var99:{re:/id="tube([0-9]{1,})pos([0-9]{1,})" class="/g, change:'class="tube$1pos$2 '},
                    //Преобразование меток аналоговых датчиков
                    var100:{re:/<g id="analog_x0020_analogLable([0-9]{1,})">/g, change:'<g class="analog_dat analog_datLable$1">'},
                    var101:{re:/id="analog([0-9]{1,})fon[_]{0,}[0-9]{0,}" class="/g, change:'class="analog_dat$1fon '},
                    var102:{re:/id="analog([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="analog_dat$1 '},

                    //Groupe gate type 23
                    var103:{re:/<g id="zadvijkaGroup_x0020_zadvijkaGroup([0-9]{1,})">/g, change:'<g class="zadvijkaGroup zadvijkaGroup$1">'},
                    var104:{re:/id="zadvijkaGroup([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="zadvijkaGroup$1 '},
                    var105:{re:/id="zadvijkaGroup([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="zadvijkaGroup$1select '},
                    var106:{re:/id="zadvijkaGroup([0-9]{1,})select.*" class="/g, change:'class="zadvijkaGroup$1select '},

                    var107:{re:/<g id="Слой_x0020_1">/g, change:'<g id="Слой_x0020_1"><title class="title_very_dificult">:-)</title>'},
                    
                    //Groupe Pzadvijka type 5
                    var108:{re:/<g id="Pzadvijka_x0020_Pzadvijka([0-9]{1,})">/g, change:'<g class="Pzadvijka Pzadvijka$1">'},
                    var109:{re:/id="Pzadvijka([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="Pzadvijka$1 '},
                    var110:{re:/id="Pzadvijka([0-9]{1,})_x0020_left[_]{0,}[0-9]{0,}" class="/g, change:'class="Pzadvijka$1 left '},
                    var111:{re:/id="Pzadvijka([0-9]{1,})_x0020_right[_]{0,}[0-9]{0,}" class="/g, change:'class="Pzadvijka$1 right '},
                    var112:{re:/id="Pzadvijka([0-9]{1,})select[_]{0,}[0-9]{0,}" class="/g, change:'class="Pzadvijka$1select '},
                    var113:{re:/id="Pzadvijka([0-9]{1,})select.*" class="/g, change:'class="Pzadvijka$1select '},

                    //Dryer new elements
                    var114:{re:/id="dryer([0-9]{1,})[_]{0,}[0-9]{0,}" class="/g, change:'class="dryer$1 '},
                    var115:{re:/id="dryer([0-9]{1,})gate.*" class="/g, change:'class="dryer$1gate '},

                };
                
  
exports.regular=regular;