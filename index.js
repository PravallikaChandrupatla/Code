 $(document).ready(function(){
    var SDate = "( Today "+getDateFormat(new Date())+" )";
    $("#datePicker").val(SDate);
    $("#datePicker").datepicker({
        onSelect: function(dateText) {
            $(this).val(getDateFormat(dateText));
        }
    })

    $(".menu").click(function(){
        $('ul.navOptions').toggleClass('active');
    })
    $('td:not(.LeftIcons)').click(function(){
        $(this).toggleClass('strikeOut');
    })
    
})   
function getDateFormat(dateText){
    const weeks = ["Mon", "Tues", "Wed", "Thus", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let current_datetime = new Date(dateText)
    let formatted_date = weeks[current_datetime.getDay()] +","+ current_datetime.getDate() + " "+months[current_datetime.getMonth()]
    console.log(formatted_date);
    return formatted_date;
}
BuildPurposeDropdown();
function BuildPurposeDropdown(){
    var template = '<select id="purpose" class="form-control">'
    $.ajax({
        type:"GET",
        dataType: "json", 
        url: "http://demo5970774.mockable.io/TimeSlots", 
        success: function(data) {
            console.log(data);
            const uniqVals = _.uniq(_.map(data, item => item.Country));
            $.each(uniqVals, function(key,value) {
                template += '<option>'+value+'</option>'
            });
            template += '</select>';
            $(".dropdown").empty().append(template);
        }, 
        error: function(jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status);
        }
    })
}