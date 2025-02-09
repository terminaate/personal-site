import type { MetaFunction } from '@remix-run/node';
import { BasicPage } from '@/components/BasicPage';
import cl from '#/index.module.scss';
import { skills } from '@/common/constants/skills';
import { projects } from '@/common/constants/projects';

export const meta: MetaFunction = () => {
  return [{ title: 'Terminaate' }];
};

const latestProject = projects[0];

export default function Index() {
  return (
    <BasicPage className={cl.page}>
      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>
          <span>About:</span>
        </h3>
        <span className={cl.text}>
          <p>
            Hey! I'm a young web developer from <span>Russia</span> who loves
            building and designing for the web.
          </p>
          <p style={{ marginTop: '5px' }}>
            I specialize in <span>React</span> and <span>Next.js</span>,
            focusing on creating modular, efficient, and visually appealing
            projects.
          </p>
          <p style={{ marginTop: '5px' }}>
            I also have a growing interest in <span>DevOps</span> and{' '}
            <span>backend</span> development, exploring how everything connects
            behind the scenes. I enjoy crafting web applications that are not
            just functional but also well-designed and user-friendly.
          </p>
        </span>
      </section>

      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>
          <span>Latest project: </span>
        </h3>
        <div className={cl.latestProjectContainer}>
          <img src={latestProject.image} alt="" />
        </div>
      </section>

      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>
          <span>Skills:</span>
        </h3>
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
        <h3 className={cl.title}>
          <span>Tools:</span>
        </h3>
        <span className={cl.text}>
          I'm primary using <code>`Lenovo Ideapad Gaming 3 15ARH05`</code> and{' '}
          <code>`Windows 11 (ReviOS)`</code> as my work setup, i also have my
          own home server that based on my old phone{' '}
          <code>`Samsung galaxy A50`</code>
        </span>
      </section>

      <section className={cl.sectionContainer}>
        <h3 className={cl.title}>
          <span>Extra: </span>
        </h3>
        <span className={cl.text}>
          <p>
            I don't play a lot of video games anymore (I enjoy programming
            more), but I used to be pretty into <span>Minecraft</span>. I've
            also enjoyed <span>Cyberpunk 2077</span>, <span>Watch dogs 2</span>,{' '}
            <span>Valorant</span>, <span>Overwatch (1)</span>
          </p>
          <p style={{ marginTop: '5px' }}>
            I also can't live without music, my favorites genre is Rap, and here
            is some of my favorite artists: <span>Kendrick lamar</span>,{' '}
            <span>JID</span>, <span>Tyler, the creator</span>,{' '}
            <span>Mick jenkins</span>, <span>MF DOOM</span>
          </p>
          <p style={{ marginTop: '5px' }}>
            Lately I've been into TV series, here are some of the ones I've
            watched recently: : <span>Arcane</span>, <span>Snowfall</span>,{' '}
            <span>Love Death + Robots</span>, <span>Breaking bad</span>
          </p>
        </span>
      </section>
    </BasicPage>
  );
}
