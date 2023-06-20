import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index')
  index() {
    return {
      title: 'Квест',
    };
  }
  @Get('/ar')
  @Render('ar')
  ar() {
    return {
      title: 'Квест',
    };
  }

  @Get('/edit')
  @Render('edit')
  edit() {
    return {
      title: 'Квест',
    };
  }

  @Get('/results')
  @Render('results')
  results() {
    return {
      title: 'Квест',
    };
  }
}
