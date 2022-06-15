<?php get_header(); ?>
<div>シングル</div>
<?php echo get_the_content(); ?>
<?php echo CFS()->get('image'); ?>
<?php $looptests = CFS()->get( 'looptest' ); ?>
<ul>
    <?php if($looptests):
foreach($looptests as $looptest):
?>
<li><?php echo $looptest[looptext]; ?></li>
<?php endforeach; endif; ?>
</ul>
<?php get_footer();