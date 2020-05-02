const dealListEL = $('.js-deal-list');
const dealItemEL = $('.js-deal-item');
const emptyListEL = $('.js-empty-list');
const createFormEL = $('.js-create-form');
const insertTitleEL = $('.js-insert-title');
const insertDescriptionEL = $('.js-insert-description');

createFormEL.on('submit', function(){
	event.preventDefault();
	const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
	dealListEL.append(`
        <li class = "deal-list__item js-deal-item">
            <article>
                <header class="item__header">
                    <h3 class="item__title js-item-title">${insertTitleEL.val()}</h3>

                        <button aria-label="Закрыть карточку дела" class="close js-close"></button>

                        <button aria-expanded="true" aria-controls=${id} aria-label="Свернуть описание дела" class="skip js-skip"></button>
                </header>

                <p class="item__description js-item-description" id = ${id}>${insertDescriptionEL.val()}</p>
            </article>
        </li>`);
    emptyListEL.hide();
    this.reset();
});
   dealListEL.on('click','.js-close', function(){
        $(this).parents('.js-deal-item').remove();
        if (dealListEL.children().length ===0){
            emptyListEL.show();
        }
    });

    dealListEL.on('click','.js-skip', function(){
	    $(this).parents('.js-deal-item').find('.js-item-description').slideToggle('fast');

	    $(this).parents('.js-deal-item').find('.js-skip').toggleClass('active');
        if ($(this).hasClass('active')){
            $(this).attr('aria-expanded','false').attr('aria-label','Развернуть описание дела');
        }
        else{
            $(this).attr('aria-expanded','true').attr('aria-label','Свернуть описание дела');
        }
});

