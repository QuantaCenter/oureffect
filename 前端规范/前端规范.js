��һ������

        1. ��������camel����������������ĸСд�����ʹ�ô�Сд��ĸ�����ɱ����ͺ��������֡���:
 
                           showTips=function(el,text,tipsType){}
 
        2. Ϊ�˸������ı���һ�����������ԣ���������ʱ�������ǰ׺���磺
    
                            var oCard={}    //�ԡ�o����ͷ�ı���oCard��һ��card��
                            var sHtml={}    //�ԡ�s����ͷ�ı���oHtml��һ��string���͵ı���                        
                            //�Լ� vCity ���������͵�city���ȵȡ�
 
            �����jquery����Ļ���������������ʱ�����$�� ���磺
                            var $this=$(this);//��ȡ��ǰ��dom����Ϊ�˼���dom������֮��ֵ����ʱ����
             ֻҪ�ǻ�ȡ��jquery���󣬶�Ҫ��$������������jquery����һ��ԭ���Ǿ���ʹ��ͬ����jqueryѡ��������һ�Ρ�
      
       3. ����ʱ����Ӣ�ģ������ü��׶���ԭ�򣬷���С��������Ա���в鿴��
    
����������

        1.����ܹ�

           Ϊ��ʹ�ýṹ���������ڲ�ѯ�޸ģ����÷������ķ�ʽ���ֽ���ʽ��һ�¶��壬�������£�
                        var oObject{  //�˴�Ϊ����ҳ����󣬿�����ҳ����������
                                  variable ��a��    //����ҳ���ȫ�ֱ�����ֻ���ڱ�ҳ��ʹ��
                                  variable����a���� 
                                  variable��[]�� 
                                 //���ܺ���1
                                  fn1��function(){}��
                                //���ܺ���2
                                  fn1��function(){ }��
                                //����ϰ�ߣ���һЩҳ��ıȽ�����Ĳ���
                                  operator��function(){}  ,
                                //�����еĶ��󣬿�������������ģ��
                                   oObjectSub :{
                                            fn:funciton(){},
                                            init:function(){
                                                    this.fn();
                                            }
                                    } 
                                //��ʼ������,��ʼ�����е�init����
                                init��function(){
                                    this.fn1();
                                    this.fn2();
                                    this.operator();
                                    this.oObjectSub.init()
                                }
                         }
                    //��ҳ��׶˵��ø�ҳ��ĳ�ʼ���������ɣ��ṹ������
$(document).ready(function(){
    oObject.init();
})
       ��������ӿ��Բο������Ƭ�е�minecard.js��
 
        2.����ϸ��

            ��1�����¼���ʱ��д��ί�е���ʽ���ô��ǵ�ҳ�淢���ػ�ʱ��Ȼ����ʹ���¼�����˲�����ײ��on�����¼���Ϊ�˼��ٰ󶨲���������ʹ�����ַ������缸����������ͬһ��Ԫ���£���Ըø�Ԫ�ؽ��а󶨡���
        $('#element').on('click',funtion(){
                    //����
         }).on('mouseenter','li',funciton(){
                    //����
         })
          ��2����������п��Խ�����д��Ҫ������д����������dom�ķ��ʣ��������õĲ�ѯ�����Ҿ�����롣�磺
           $('#id1'��.find('li').css('background'��'#fff').end().find('.class1').removeClass('class2').end().hide().remove����
            idΪid1��Ԫ���µ�li��������Ϊ��ɫ���ҵ����º���class1��Ԫ�أ����Ƴ����Ԫ�ص�class2., ���idΪid1��Ԫ�����ز���֮�Ƴ�dom��
 
           ��3����������domԪ�صĲ�����
         Ҫ�������ٵĲ���domԪ�أ���ȡ�������ʵı�����һ�����棬����ܶ�����ػ�Ĳ�����insert��appendTo�Ȳ������������������ػ档������Ҫ����Ԫ��ʱ�����ȶ���һ������
               var  sHtml='<div><span class="xx"></span><a href="##"></a></div>';
               Ȼ��������Ҫ����Ԫ�ص�html��$('#id').html(sHtml); 
              Ҫ����������ѭ�������з���jquery����
 
         ��4�� �첽�ύʱҪ��ֹ�ظ����
       ���û����ٱȽ�����ʱ�򣬵��û����̨post���ݺ�Ҫ����class����ֹ�û��ظ��ύ�����ٷ�����ѹ����
          (5)    ��ȡ���õĹ��ܺͷ�������ߴ���ĸ��á�
 
        3.���õ�ע�ʹ���ϰ��

        ��1��ҳ�濪ͷ��Ҫ���ע�ͣ�������д�ˣ���д���ݣ���дʱ��ȡ���
                 
/**
* ҳ������
* @author xx(2012-09-21)
* @modifier xx2012-10-22)
* @modifier xx(2012-12)
* @version 2013-04-04(xx)
*/
       ��2�� ����Լ�����ͬ�¿��ܿ��������������ƺ���Ҫ�ӵ���ע��
       ��3�� Ҫ�Թ�����������ע�ͣ�������Ҫ�ӵ���ע�ͣ��Բ���Ҫ���Խ��ͣ�������ʾ�÷����£�
           
    /**
     * ��ʾ��ʾ��
     * @param {object} el          [��Ԫ��]
     * @param {string} text        [��ʾ��]
     * @param {string} tipsType [��ʾ��ʽ]  ok_tip,error_tip;
     */
     showTips=function(el,text,tipsType){
         this.clearTips(el);
         if(text){
            var $tips = $('<span class="' + (tipsType||defaults.tipsType) + '"></span><span class="error_content">'+text+'</span>').insertAfter(el);            
         }else{
             var $tips = $('<span class="' + (tipsType||defaults.tipsType) + '"></span>').insertAfter(el);
         }
        return $tips;
     },
       ��4���Ա��˵Ĵ�������޸�ʱҪ��ǰ������ͨ��������Ӧ�޸�λ������޸ļ�¼:
                      // $('#id').css('color',#fff); //ԭ�м�¼
                       $('#id').css('color',#000); //modified by ���� 2013-11-13