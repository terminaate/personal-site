import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/index.module.scss';
import { skills } from '@/common/constants/skills';
import { Todo } from '@/components/Todo';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate' }];
};

export default function Index() {
  return (
    <BasicPage className={cl.page}>
      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>About:</h3>
        <span className={cl.text}>
          <p>
            Hey! I'm a young web developer from <span>Russia</span> who loves
            building and designing for the web.
          </p>
          <p>
            I specialize in <span>React</span> and <span>Next.js</span>,
            focusing on creating modular, efficient, and visually appealing
            projects.
          </p>
          <p>
            I also have a growing interest in <span>DevOps</span> and{' '}
            <span>backend</span> development, exploring how everything connects
            behind the scenes. I enjoy crafting web applications that are not
            just functional but also well-designed and user-friendly.
          </p>
        </span>
      </section>

      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>Skills:</h3>
        <div className={cl.skillsContainer}>
          <div className={cl.skills}>
            {Object.entries(skills).map(
              ([categoryName, categorySkills], categoryIndex) => (
                <div key={categoryIndex} className={cl.skillsCategoryContainer}>
                  <span className={cl.skillsCategoryName}>{categoryName}</span>
                  <div className={cl.categorySkills}>
                    {categorySkills.map(
                      ({ name, icon: SkillIcon }, skillIndex) => (
                        <SkillIcon
                          size={25}
                          aria-label={name}
                          title={name}
                          key={skillIndex}
                        />
                      ),
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>Tools:</h3>
        <span className={cl.text}>
          I'm primary using <code>`Lenovo Ideapad Gaming 3 15ARH05`</code> and{' '}
          <code>`Windows 11 (ReviOS)`</code> as my work setup, i also have my
          own home server that based on my old phone{' '}
          <code>`Samsung galaxy A50`</code>
        </span>
      </section>

      <Todo>// TODO: redesign section below</Todo>
      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>Extra:</h3>
        <span className={cl.text}>
          <p>
            I don’t game much anymore (I prefer programming), but I’ve enjoyed{' '}
            <code>Cyberpunk 2077</code>, <code>Watch Dogs 2</code>,{' '}
            <code>Valorant</code>, and <code>Overwatch</code>.
          </p>
          <p>
            Music is essential to me—especially Rap. Some favorites:{' '}
            <code>Kendrick Lamar</code>, <code>JID</code>,{' '}
            <code>Tyler, the Creator</code>, <code>Mick Jenkins</code>, and{' '}
            <code>MF DOOM</code>.
          </p>
          <p>
            Lately, I’ve been into TV series. Recent watches:{' '}
            <code>Avatar the last airbender</code>,<code>Arcane</code>,{' '}
            <code>Silicon Valley</code>, <code>Snowfall</code>,{' '}
            <code>Love, Death + Robots</code>, and <code>Breaking Bad</code>.
          </p>
        </span>
      </section>

      <div className={cl.webRingLinks}>
        <a href="https://ctp-webr.ing/terminaate/previous">[{'<'}]</a>
        <a href="https://ctp-webr.ing/">Catppuccin webring</a>
        <a href="https://ctp-webr.ing/terminaate/next">[{'>'}]</a>
      </div>
    </BasicPage>
  );
}
