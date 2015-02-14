<mtg-card>
    <li onmouseover={hover} onclick={show_modal} data-type-cid={opts.model.cid}>{opts.model.get('name')}</li>

    hover(e) {
        $('img').attr('src', opts.model.get('images').mtgimage);
    }

    show_modal(e) {
        var modal = $('.modal');

        modal.find('.modal-header').text(opts.model.get('name'));
        modal.find('.modal-body').html('<mtg-cardinfo></mtg-cardinfo>');
        $('.modal').modal({});

        riot.mount('mtg-cardinfo', { model: opts.model });
    }
</mtg-card>