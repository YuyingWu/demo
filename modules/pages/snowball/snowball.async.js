var Snowball = {
    order: function(){
        var me = this;
        var total = $('#add-total');

        $.each($('.percentage'), function(index, item){
            var percentage = +$(item).val();
            var unit = +$(item).siblings('.unit-price').val();

            if(!percentage || !unit){
                return;
            }

            var result = $(item).siblings('.result');
            var money = +total.val() * percentage / 100;

            result.text('持仓：' + money / unit + '股');
        });
    },
    change: function(){
        var total = $('#change-total');

        $('.rest-stock').each(function(index, item){
            var stock = +$(item).val();

            if(!stock){
                return;
            }

            var result = $(item).siblings('.result');

            result.text('仓位：' + stock / +total.val() * 100 + '%');
        });
    },
    eventHandler: function(){
        var me = this;

        $('#btn-count').click(function(e){
            e.preventDefault();

            me.order();
        });

        $('#btn-change').click(function(e){
            e.preventDefault();

            me.change();
        });

        $('.btn-add').click(function(){
            var type = $(this).data('type');

            me.insertItem(type);
        });

        /*$('#form-add-stock').on('click', '.btn-add', function(){
            me.insertItem('add');
        });

        $('#form-change-stock').on('click', '.btn-add', function(){
            me.insertItem();
        });*/
    },
    init: function(){
        var me = this;

        me.eventHandler();

        $('.btn-add').click();
    },
    insertItem: function(type){
        var tpl = '';
        var target;

        if(type == 'add'){
            target = $('#total-group');

            tpl = [
            '<div class="form-group col-sm-12 count-item">',
                '<label class="col-sm-2 control-label">持股：</label>',
                '<div class="col-sm-10">',
                    '<input type="number" class="form-control percentage">%：',
                    '<input type="number" class="form-control unit-price">元/股',
                    '<span class="result bg-primary">持仓0股</span>',
                '</div>',
            '</div>'
            ].join('');
        }else{
            target = $('#change-group');

            tpl = [
            '<div class="form-group col-sm-12 count-item">',
                '<label class="col-sm-2 control-label">持股：</label>',
                '<div class="col-sm-10">',
                    '<input type="number" class="form-control rest-stock">RMB * ',
                    '<span class="result bg-primary">仓位0%</span>',
                '</div>',
            '</div>'
            ].join('');
        }
        
        $(tpl).insertAfter(target);
    }
}

return ['$scope', function($scope) {
    /*var total = $('#total');

    var order = function(){
        $.each($('.percentage'), function(index, item){
            var percentage = +$(item).val();
            var unit = +$(item).siblings('.unit-price').val();

            if(!percentage || !unit){
                return;
            }

            var result = $(item).siblings('.result');
            var money = +total.val() * percentage / 100;

            result.text('持仓' + money / unit + '股');
        });
    }

    var changeStock = function(){
        var total = $('#change-total');

        $('.rest-stock').each(function(index, item){
            var stock = +$(item).val();

            if(!stock){
                return;
            }

            var result = $(item).siblings('.result');

            result.text( stock / +total.val() * 100);
        });
    }

    $('#btn-count').click(function(e){
        e.preventDefault();

        order();
    });

    $('#btn-change').click(function(e){
        e.preventDefault();

        changeStock();
    });

    $('#form-add-stock').on('click', '.btn-add', function(){
        Snowball.insertItem();
    });*/
    Snowball.init();
}];
