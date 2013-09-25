test('Attributes', function () {
	equal($('#div').attr('class'), 'foobar', 'Get class attribute');

	ok($('#link').removeAttr('title'), 'Remove attribute');
	equal($('#link').attr('title'), null, 'Get null title attribute');

	ok($('#span1').attr('lang', 'en'), 'Set lang attribute');
	equal($('#span1').attr('lang'), 'en', 'Get lang attribute');

	equal($('#text').is('input'), true, 'is (input)');

	equal($('#text').val(), 'Hello World!', 'Get val test 1');

	ok($('#text').val('Bye World!'), 'Set val test');
	equal($('#text').val(), 'Bye World!', 'Get val test 2');

	equal($('#link').html(), 'Google link', 'Get html test 1');
	equal($('#link').text(), 'Google link', 'Get text test 1');

	ok($('#link').html('<span>New link</span>'), 'Set html test');
	equal($('#link').html(), '<span>New link</span>', 'Get html test 2');

	ok($('#link').text('Another link'), 'Set text test');
	equal($('#link').text(), 'Another link', 'Get text test 2');
});

test('Class', function () {
	ok($('#span1').addClass('blue'), 'addClass');
	equal($('#span1').hasClass('blue'), true, 'hasClass (true)');

	ok($('#span1').removeClass('blue'), 'removeClass');
	equal($('#span1').hasClass('blue'), false, 'hasClass (false)');

	ok($('#span1').toggleClass('blue'), 'toggleClass');
	equal($('#span1').hasClass('blue'), true, 'hasClass (toogle true)');

	ok($('#span1').toggleClass('blue'), 'toggleClass');
	equal($('#span1').hasClass('blue'), false, 'hasClass (toogle false)');
});

test('CSS', function () {
	equal($('#div').css('display'), 'block', 'Get display property');

	ok($('#span1').css('position', 'relative'), 'Set position property');
	equal($('#span1').css('position'), 'relative', 'Get position property');
});

test('Traversing', function () {
	equal($('span').filter('#span1').length, 1, 'Filter test');

	equal($('body').find('.child').length, 3, 'Find test');

	equal($('#div').parent().is('body'), true, 'Parent test');

	equal($('#span2').prev().is('#span1'), true, 'Prev test');

	equal($('#span2').next().is('#span3'), true, 'Next test');

	equal($('#parent').children().length, 3, 'Children test');

	ok($('#remove').remove(), 'Remove test');
	equal($('#remove').length, 0, 'Remove test');
});