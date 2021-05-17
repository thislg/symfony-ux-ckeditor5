<?php
declare(strict_types=1);

namespace Xearts\Symfony\UX\Ckeditor5\Tests\Kernel;

use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Kernel;
use Xearts\Symfony\UX\Ckeditor5\XeartsCkeditor5Bundle;

class FrameworkAppKernel extends Kernel
{
    use AppKernelTrait;

    public function registerBundles()
    {
        return [new FrameworkBundle(), new XeartsCkeditor5Bundle()];
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(function (ContainerBuilder $container) {
            $container->loadFromExtension('framework', ['secret' => '$ecret', 'test' => true]);
        });
    }
}
