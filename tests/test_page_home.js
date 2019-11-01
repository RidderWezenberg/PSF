import {Selector, t} from 'testcafe';


//x = Selector("#xyz");
const homeAdress = '';


test('Check if we can visit the homepage', async t => {
    await t
        .navigateTo(homeAdress);

    const getWindowLocation = ClientFunction(() => window.location);

    await t
    .expect(homeAdress).eql(getWindowLocation);
});


test('Check if we can use the navigation', async t => {

/*     item_1 = ''
    item_2 = ''
    item_3 = ''
    item_4 = ''
    item_5 = ''
    item_6 = ''
    
    > click on item <item_1>
    
    **Check**
    browser navigated to <item_1>
    
    > go back
    > click on item <item_2>
    
    **Check**
    browser navigated to <item_2>
    
    > go back
    > click on item <item_3>
    
    **Check**
    browser navigated to <item_3>
    
    > go back
    > click on item <item_4>
    
    **Check**
    browser navigated to <item_4>
    
    > go back
    > click on item <item_5>
    
    **Check**
    browser navigated to <item_5>
    
    > go back
    > click on item <item_6>
    
    **Check**
    browser navigated to <item_6> */
});



test('Check if we can see an image on the homepage', async t => {
/*     site-adress = ''

    > enter adress <site-adress> in browser
    > hit enter
    
    **Check**
    A picture with a sea-urchin shows */
});

test('Check if we can see the site-goal on the homepage', async t => {
/*     site-adress = ''
    site_goal = ''
    
    > enter adress <site-adress> in browser
    > hit enter
    
    **Check**
    <site_goal> shows */
    });



